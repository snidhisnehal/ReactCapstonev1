import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import store from './redux/store'; 
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import { handleAction } from './redux/counterSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(handleAction.cartCatculation())
root.render(
  <HashRouter>
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>  
  </React.StrictMode>
  </HashRouter>
);


reportWebVitals();

