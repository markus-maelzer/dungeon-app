import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/App.css';

import MonsterContainer from './monster/MonsterContainer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MonsterContainer />, document.getElementById('root'));
registerServiceWorker();
