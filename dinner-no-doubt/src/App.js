import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

// import MealWheel from './components/MealWheel';
import RestaurantList from './components/RestaurantList';
import './App.css';
import Dashboard from './user/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">LoginForm</Link>
        </li>
        <li>
          <Link to="/protected">User Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/protected" component={Dashboard} />
        <Route path="/login" component={SignIn} />
        <Route component={SignIn} />
      </Switch>
    </div>
  </Router>

  //   <Router>
  //   <div>
  //       <Switch>
  //       <Route path="/" exact component={SignIn} />
  //       <Route path="/signup" component={SignUp} />
  //       </Switch> 

  //       {/* <Dashboard /> */}
  // <RestaurantList/>
  //    {/* <MealWheel/> */}
   
  //   </div>
  //   </Router>
  );
}

export default App;
