import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import RecentHistory from "./RecentHistory";
import MyProfile from "./MyProfile";

export default function Dashboard() {
   const [activeItem, setActiveItem] = useState('');
   const handleItemClick = (e, { name }) => {
      setActiveItem(name);
   }

   return (
      <>
      <h1>Testing!</h1>
         <Menu tabular>
            <Menu.Item
               name='RecentHistory'
               active={activeItem === 'RecentHistory'}
               onClick={handleItemClick}
            >
            <NavLink to="/RecentHistory">History</NavLink>
        </Menu.Item>
            <Menu.Item
               name='MyProfile'
               active={activeItem === 'MyProfile'}
               onClick={handleItemClick}
            >
            <NavLink to="/MyProfile">MyProfile</NavLink>
        </Menu.Item>
            </Menu>
            <Route path="/RecentHistory" component={RecentHistory} />
            {/* <Route path="/MyProfile" component={MyProfile} /> */}
        </>
   )
};