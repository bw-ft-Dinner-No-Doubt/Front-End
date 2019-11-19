import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MealWheel from './components/MealWheel';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <div>
      
     <SignIn />
     <RestaurantList/>
     {/* <MealWheel/> */}
   
    </div>
  );
}

export default App;
