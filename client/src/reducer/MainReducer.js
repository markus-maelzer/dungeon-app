// import modules
import { combineReducers } from 'redux';
import Client from '../Client';

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
      return {
        ...state,
        toggleNav: !state.toggleNav,
        filepath: filepath,
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
