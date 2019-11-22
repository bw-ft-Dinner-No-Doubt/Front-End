<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './reducer';
import thunk from 'redux-thunk'
=======
>>>>>>> 7fec0fd2c041d81f2a84d88a12b08d86576d6982

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
 import rootReducer from './components/reducers';
import thunk from "redux-thunk";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk),)

ReactDOM.render(
<<<<<<< HEAD
    <Router>
    <App />
    </Router>,
document.getElementById('root'))
=======
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,

  document.getElementById("root")
);
>>>>>>> 7fec0fd2c041d81f2a84d88a12b08d86576d6982

