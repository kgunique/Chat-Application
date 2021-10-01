import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({},{});

const firebaseConfig = {
  apiKey: "AIzaSyDO_8DQtMQIuVqYXXfwloylKyyAqihVi6o",
  authDomain: "messenger-4e353.firebaseapp.com",
  projectId: "messenger-4e353",
  storageBucket: "messenger-4e353.appspot.com",
  messagingSenderId: "663880612733",
  appId: "1:663880612733:web:166fdd44f5c938684e2a14",
  measurementId: "G-NG38CLW9RF"
};

const app = initializeApp(firebaseConfig);




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
