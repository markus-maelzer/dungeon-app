import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import './index.css';

import MonsterContainer from './monster/MonsterContainer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MonsterContainer />, document.getElementById('root'));
registerServiceWorker();
