import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';
import {webVitals} from './web-vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

webVitals();
