import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import LoginPage from './pages/LoginPage'
// import Hotels from './pages/Hotels'
// import Orders from './pages/Orders'

// ReactDOM.render(<LoginPage />, document.getElementById('root'));
// ReactDOM.render(<Hotels />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();