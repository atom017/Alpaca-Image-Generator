import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AssetProvider} from './Context'


ReactDOM.render(
  <React.StrictMode>
    <AssetProvider>
    <App />
    </AssetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

