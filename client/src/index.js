// import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { reactReduxFirebase } from 'react-redux-firebase';

// import reducer
import { reducer } from './reducer/MainReducer';

// import redux middleware modules
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import css files
import './css/index.css';
import './css/wiki.css';

// import Components
import { ReduxContainer } from './dungeonWiki/DataContainer.js';
import { LSContainer } from './login/LSContainer';
import registerServiceWorker from './registerServiceWorker';

// import firebase inits
import { firebaseConfig, config } from './firebase/database';
//import { initAuth } from './firebase/auth';

const middleware = applyMiddleware(promise(), thunk, createLogger());

// createStore function with firebase redux module
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

// use createStoreWithFirebase function to create the store
const store = createStoreWithFirebase(
  reducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => (
              <ReduxContainer {...props} />
            )} />
            <Route exact path='/login' component={LSContainer} />
            <Route exact path='/monster' render={(props) => (
              <ReduxContainer {...props} />
            )} />
            <Route exact path='/items' render={(props) => (
              <ReduxContainer {...props} />
            )} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
