import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MyHistory from './user/MyHistory';
// import RestaurantList from './components/RestaurantList';
import './App.css';
import Dashboard from './user/Dashboard';
import MyProfile from './user/MyProfile';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
      <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">User Dashboard</Link>
        </li>
        <li>
          <Link to="/protected/profile">My Profile</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={Dashboard} />
        <PrivateRoute path="/protected/history" component={MyHistory} />
        <PrivateRoute path="/protected/profile" component={MyProfile} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
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
