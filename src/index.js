import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Header from './components/Header';
import './global.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
