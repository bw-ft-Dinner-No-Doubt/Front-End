import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link, Route } from "react-router-dom";
import {AxiosWithAuth} from '../components/utilities/AxiosWithAuth';
// import MyHistory from "./MyHistory";
// import MyProfile from "./MyProfile";
import RestaurantList from "../components/RestaurantList";

export default function Dashboard(props) {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const logOut =() => {
    AxiosWithAuth()
    .get("api/auth/logout")
    .then(res => {
       console.log(res)
       localStorage.removeItem('token', res.data.token);
       // values.history.push('/protected');
      

    })
    .catch(error => {
      console.log(error);
    });


  }

  return (
    <div>
      <RestaurantList />
      {/* <Menu tabular>
       
          <Menu.Item
            name="RecentHistory"
            active={activeItem === "RecentHistory"}
            onClick={handleItemClick}
          ></Menu.Item> */}
           {/* <NavLink to="/protected/history">Restaurant History</NavLink> */}
{/*        
        <br /> */}

        
          {/* <Menu.Item
            name="MyProfile"
            active={activeItem === "MyProfile"}
            onClick={handleItemClick}
          >
        
          </Menu.Item> */}
          {/* <NavLink to="/protected/profile">My Profile</NavLink> */}
  
      {/* </Menu> */}
      <Link to ="/login">
      <button className="logOut" onClick={logOut}>Log Out</button>
      </Link>
    </div>
  );
}
