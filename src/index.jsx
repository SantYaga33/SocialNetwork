import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redax/State';
import * as serviceWorker from './serviceWorker';


// const headerNavLinks = ['Timeline','Photos','Friends','Messages','Groups','About','More'];




ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();