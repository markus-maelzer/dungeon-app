// import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

// import reducer
import { reducer } from './reducer/MainReducer';

// import css files
import './css/index.css';
import './css/monster.css';

// import Components
import { DataContainer } from './dungeonWiki/DataContainer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);


export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => (
              <DataContainer {...props} filePath='' />
            )} />
            <Route exact path='/monster' render={(props) => (
              <DataContainer {...props} filePath='monster' />
            )} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
