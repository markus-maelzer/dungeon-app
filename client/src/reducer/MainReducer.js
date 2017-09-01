// import modules
import { combineReducers } from 'redux';

// import all reducers
import { dataReducer } from './dataReducer';
import { navReducer } from './navReducer';
import { lsReducer } from './lsReducer';

export const reducer = combineReducers({
  dataReducer,
  navReducer,
  lsReducer,
});
