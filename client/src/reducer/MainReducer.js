// import modules
import { combineReducers } from 'redux';

//initial States
const initialDataReducerState = {
  data: [],
  filterData: [],
  fetchingData: false,
  fetchedData: false,
  fetchingDataError: null,
  toggleCreate: false,
}

const initialNavReducerState = {
  toggleNav: true,
  filepath: 'monster',
}

export const reducer = combineReducers({
  dataReducer,
  navReducer,
});

function dataReducer(state = initialDataReducerState, action) {
  switch (action.type) {
    case 'TOGGLE_DETAILS':
    case 'TOGGLE_EDIT':
    case 'CREATE_DATA':
    case 'UPDATE_DATA': {
      return {
        ...state,
        data: handleDataReducer(state.data, action),
        filterData: handleDataReducer(state.filterData, action),
      }
    }
    case 'TOGGLE_CREATE' : {
      return {
        ...state,
        toggleCreate: !state.toggleCreate,
      }
    }

    // SERVER REQUESTS
    case 'GET_SERVER_DATA_PENDING': {
      return {...state, fetchingData: true, fetchedData: false,}
    }
    case 'GET_SERVER_DATA_REJECTED': {
      return {...state, fetchingData:false, fetchedData: false, fetchingDataError: action.payload}
    }
    case 'GET_SERVER_DATA_FULFILLED': {
      return {
        ...state,
        fetchingData: false,
        fetchedData: true,
        data: handleDataReducer(state.data, action),
        filterData: handleDataReducer(state.filterData, action),
      }
    }
    default: {
      return state;
    }
  }
}

function findIndex(state, action) {
  switch (action.type) {
    case 'TOGGLE_DETAILS':
    case 'TOGGLE_EDIT':
    case 'UPDATE_DATA': {
      return state.findIndex(
        d => d.id === action.id
      );
    }

    default: {
      return state;
    }
  }
}

function handleDataReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_DETAILS':
    case 'TOGGLE_EDIT' : {
      const itemIndex = findIndex(state, action);

      const oldItem = state[itemIndex];
      const newItem = createNewItem(oldItem, action);

      return [
        ...state.slice(0, itemIndex),
        newItem,
        ...state.slice(itemIndex +1, state.length),
      ];
    }
    case 'CREATE_DATA': {

    }

    // Server Stuff
    case 'GET_SERVER_DATA_FULFILLED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

function createNewItem(oldItem, action) {
  switch (action.type) {
    case 'TOGGLE_DETAILS': {
      return {
        ...oldItem,
        toggleDetails: !oldItem.toggleDetails
      };
    }
    case 'TOGGLE_EDIT': {
      console.log(oldItem);
      return {
        ...oldItem,
        toggleEdit: !oldItem.toggleEdit
      };
    }
    default:

  }
}


function checkFilepath(state, action) {
  switch (action.filepath) {
    case 'toggle' :
    case 'home' : {
      return state.filepath;
    }
    default : {
      return action.filepath;
    }
  }
}

function navReducer(state = initialNavReducerState, action) {
  switch (action.type) {
    case 'CLICK_LINK': {
      var filepath = checkFilepath(state, action);
      if (filepath === state.filepath) {
        return {
          ...state,
          toggleNav: !state.toggleNav,
          filepath: filepath,
        }
      } else {
        return {
          ...state,
          toggleNav: !state.toggleNav,
          filepath: filepath,
        }
      }
    }
    default: {
      return state;
    }

  }
}
