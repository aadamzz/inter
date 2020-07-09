import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reset from './themes/Reset';
import { AuthProvider } from './Auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Reset />
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

