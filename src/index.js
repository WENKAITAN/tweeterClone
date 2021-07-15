import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'
import reducer from '../src/reducers'
import middleware from './middlewares'
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(reducer, middleware)
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);