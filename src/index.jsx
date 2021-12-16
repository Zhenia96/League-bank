import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import getDeviceType from './common/common';
import rootReducer from './store/root-reducer';
import { NameSpace } from './constants';
import { changeDeviceType } from './store/action';
import 'normalize.css';
import './css/index.scss';

const store = configureStore({
  reducer: rootReducer,
});

window.addEventListener('resize', () => {
  const nextDeviceType = getDeviceType();
  const prevDeviceType = store.getState()[NameSpace.APPLICATION].deviceType;

  if (nextDeviceType !== prevDeviceType) {
    store.dispatch(changeDeviceType(nextDeviceType));
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
