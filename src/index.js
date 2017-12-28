import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './Containers/App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
 ), document.getElementById('root')
);