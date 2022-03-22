import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent';
import './assets/styles.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);
