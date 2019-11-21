import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link, Route } from "react-router-dom";
import MyHistory from "./MyHistory";
import MyProfile from "./MyProfile";
import RestaurantList from '../components/RestaurantList';

export default function Dashboard() {
   const [activeItem, setActiveItem] = useState('');
   const handleItemClick = (e, { name }) => {
      setActiveItem(name);
   }

   return (
      <>
         <Menu tabular>
         <RestaurantList/>
            {/* <Menu.Item
               name='RecentHistory'
               active={activeItem === 'RecentHistory'}
               onClick={handleItemClick}
            /> */}
             <Link to="/protected/history">Restaurant History</Link>
            <br/>
        {/* </Menu.Item> */}
            {/* <Menu.Item
               name='MyProfile'
               active={activeItem === 'MyProfile'}
               onClick={handleItemClick}
            /> */}
            <Link to={`/protected/profile`}>MyProfile</Link>
        {/* </Menu.Item> */}
            </Menu>
           
        </>
   )
};