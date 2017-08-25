// import modules
import { combineReducers } from 'redux';

//initial States
const dataReducerState = {
  data: [],
  filterData: [],
  toggleNav: true,
  filepath: null,
  fetching: false,
  fetched: false,
  error: null,
}

export const reducer = combineReducers({
  dataReducer,
});

function dataReducer(state = dataReducerState, action) {
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
          fetching: false,
          fetched: false,
        }
      }
    }
    case 'TOGGLE_NAV': {
      return state;
    }
    case 'GET_SERVER_DATA_PENDING': {
      return {...state, fetching: true}
    }
    case 'GET_SERVER_DATA_REJECTED': {
      return {...state, fetching:false, error: action.payload}
    }
    case 'GET_SERVER_DATA_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload,
      }
    }
    default: {
      return state;
    }
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
