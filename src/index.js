import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game title="HOT or COLD" />, document.getElementById('root'));
registerServiceWorker();
