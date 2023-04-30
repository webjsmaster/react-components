import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/Router';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
