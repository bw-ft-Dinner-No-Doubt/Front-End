import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import MealWheel from './components/MealWheel';
// import RestaurantList from './components/RestaurantList';
=======
import OnboardingForm from './components/SignIn';
import OnboardingFormTwo from './components/SignUp';
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <Router>
    <div>
        <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        </Switch> 

        {/* <Dashboard /> */}
     
      
     





     {/* <RestaurantList/> */}
     {/* <MealWheel/> */}
   
=======
    <div className="App">
      <OnboardingForm />
      <OnboardingFormTwo />
>>>>>>> a4e4b9a99a1939863b730b6745f93bcc4fa34514
    </div>
    </Router>
  );
}

export default App;
