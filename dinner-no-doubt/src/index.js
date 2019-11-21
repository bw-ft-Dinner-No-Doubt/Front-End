import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
import App from './App';
import{ BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducer';
import thunk from 'redux-thunk'

import './index.css';

// const store = createStore(rootReducer, applyMiddleware(thunk),)

ReactDOM.render(
<Router>
<App/>
</Router>,

<<<<<<< HEAD
=======
ReactDOM.render(
<Router>
    <App />
</Router>,
document.getElementById('root'));
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514

document.getElementById('root'));
