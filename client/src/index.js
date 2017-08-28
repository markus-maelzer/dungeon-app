// import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// import reducer
import { reducer } from './reducer/MainReducer';

// import redux middleware modules
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import css files
import './css/index.css';
import './css/monster.css';

// import Components
import { ReduxContainer } from './dungeonWiki/DataContainer.js';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(
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
            <Route exact path='/monster' render={(props) => (
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
