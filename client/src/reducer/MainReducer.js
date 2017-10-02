// import modules
import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';

// import all reducers
import { dataReducer } from './dataReducer';
import { navReducer } from './navReducer';
import { loginReducer } from './loginReducer';

export const reducer = combineReducers({
  dataReducer,
  navReducer,
  loginReducer,
  firebase: firebaseStateReducer,
});
