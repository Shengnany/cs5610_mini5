import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Parent from './components/Parent';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Parent />
  </Provider>,
  document.querySelector('#root')
);
