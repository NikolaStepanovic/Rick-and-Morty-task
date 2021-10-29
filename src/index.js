import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga';
import Saga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>{app}</React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
