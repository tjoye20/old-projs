import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  //the Redux Provider is used to setup our Redux store
  <Provider store={createStore(reducers)}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);