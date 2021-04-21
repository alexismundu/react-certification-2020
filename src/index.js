import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import AppProvider from './state/AppProvider';
import './global.css';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
