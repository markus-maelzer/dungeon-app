const initialDataReducerState = {
  data: [],
  filterData: [],
  dataProps: [],
  fetchStatus: fetchStatusReducer(undefined, {}),
  toggleCreate: false,
  searchBy: 'name',
}

export function dataReducer(state = initialDataReducerState, action) {
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

    case 'SEARCH_DATA': {
      return {
        ...state,
        filterData: searchData(state, action),
      }
    }

    // SERVER REQUESTS
    case 'GET_SERVER_DATA_PENDING': {
      return {...state, fetchStatus: fetchStatusReducer(state.fetchStatus, action)}
    }
    case 'GET_SERVER_DATA_REJECTED': {
      return {...state, fetchStatus: fetchStatusReducer(state.fetchStatus, action)}
    }
    case 'GET_SERVER_DATA_FULFILLED': {
      return {
        ...state,
        fetchStatus: fetchStatusReducer(state.fetchStatus, action),
        data: handleDataReducer(state.data, action),
        filterData: handleDataReducer(state.filterData, action),
        dataProps: getDataProps(state.dataProps, action),
      }
    }
    default: {
      return state;
    }
  }
}

function searchData(state, action) {
  switch (action.type) {
    case 'SEARCH_DATA': {
      var updatedList = state.data;
      console.log(state);
      var filter = state.searchBy;

      updatedList = updatedList.filter(item => {
        return item[filter].toLowerCase().search(
          action.text.toLowerCase()) !== -1;
      });

      return updatedList;
    }


    default: {
      return state;
    }
  }
}

function fetchStatusReducer(state = {
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case 'GET_SERVER_DATA_PENDING': {
      return {...state, fetching: true, fetched: false}
    }
    case 'GET_SERVER_DATA_REJECTED': {
      return {
        ...state,
        fetching:false,
        fetched: false,
        error: action.payload
      }
    }
    case 'GET_SERVER_DATA_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
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
  }
}

function getDataProps(state, action) {
  if (action.type === 'GET_SERVER_DATA_FULFILLED') {
    return Object.getOwnPropertyNames(action.payload[0]);
  }
}
