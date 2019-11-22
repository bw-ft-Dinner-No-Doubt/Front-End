import React, {useState} from "react";
import {AxiosWithAuth} from './utilities/AxiosWithAuth';
import RestaurantList from './RestaurantList';



const RestaurantChoice = (props) => {
// console.log('RestaurantChoice.js -> %cprops:', 'color: darkorange', props)
  


  
  const rcInfo = {
    //user_id

    name: props.restaurantList.name,
    category: props.restaurantList.categories[0].title,
    recentHistory: 1
  };
  AxiosWithAuth()
    .post("/api/restaurants", rcInfo)
    .then(res => {
      console.log(res);
      
    })
    .catch(err => {
      console.error("Problem in RestaurantChoicePOST:", err); // There was an error creating the data and logs to console
      
    });

  return (
    <div>
      <h3>{props.restaurant.name}</h3>
      <p>{props.restaurant.display_phone}</p>
      <p>{props.restaurant.categories[0].title}</p>
      <p>{props.restaurant.price}</p>
      <p>`{props.restaurant.rating} out of 5 stars`</p>
    </div>
  );
};

export default RestaurantChoice;
