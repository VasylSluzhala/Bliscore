import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
//import './styles/animate.min.css';
import './styles/main.css';
import './styles/main.scss';
//import './styles/responsive.css';
//import './styles/responsive.scss';
//import './styles/style.css';
//import './styles/style.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));
