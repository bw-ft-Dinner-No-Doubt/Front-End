import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div>
     <SignIn />
    </div>
  );
}

export default App;
