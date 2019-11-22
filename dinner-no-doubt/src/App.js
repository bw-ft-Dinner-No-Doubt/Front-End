import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
// import Dashboard from './components/Dashboard';
// import MealWheel from './components/MealWheel';
// import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <Router>
    <div>
        <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />

        </Switch>

        {/* <Dashboard /> */}
     
      
     





     {/* <RestaurantList/> */}
     {/* <MealWheel/> */}
   
    </div>
    </Router>
  );
}

export default App;
