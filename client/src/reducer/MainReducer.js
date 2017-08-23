// import modules
import { combineReducers } from 'redux';

//initial States
const dataReducerState = {
  filepath: null,
  data: [],
  filterData: [],
  toggleDetails: false,
  toggleEdit: false,
}

export const reducer = combineReducers({
  dataReducer,
});

function dataReducer(state = dataReducerState, action) {
  switch (action.type) {
    case 'GET_FILEPATH': {
      return action.filepath;
    }
    default: {
      return state;
    }

  }
}
