import React, { useEffect } from "react";
import { connect } from "react-redux";
// import RestaurantChoice from "./RestaurantChoice";
import {fetchRestaurants } from "./actions/";
import Slot from "./MealWheel";


const RestaurantList = props => {
  // console.log("RestaurantList.js -> %cprops:", "color: cyan", props);

  const divStyle={width: '100%', height: '100%'}
  // const foodPrefs = {
  //   spicy: 1,
  //   vegetarian: 0,
  //   vegan: 0,
  //   femaleOwned: 0,
  //   outdoor_dining: 1
  // };

  const wheelData = {
    target: Math.round(Math.random() * 10),
    times: 2,
    duration: 3000,
    turn: false
  };

  

  // console.log('RestaurantList.js -> %ctarget:', 'color: teal', target)

  // console.log("FoodPrefs:", foodPrefs);

  // let terms = Object.entries(foodPrefs).forEach(pref => {
  //   if (pref[1] !== 0) {
  //     return pref[0];
  //   }
  // });
  // console.log("Terms:", terms);
  // console.log('RestaurantList.js -> %csearchTerms:', 'color: red', searchTerms)

  // console.log("RestaurantList.js -> %cterms:", "color: brown", terms);

  useEffect(() => {
    props.fetchRestaurants();
  }, []);
  if (props.isFetching) {
    return <h2>Loading Restaurants...</h2>;
  }
  // let restaurants = props.restaurantList.data
 console.log("Restaurant List fetch:",props)
  return (
    <section>
      {props.error && <p>{props.error}</p>}

      <div>
        <div>
       

       
          {props.restaurantList.map(restaurant => {
             
            return <div style = {divStyle}><Slot {...restaurant}/></div>
            
             
            // Children of `Slot` be sure to be `width` and `height` are 100%.
           
      })}
          
        </div>
     
  
      </div>
    
    </section>
  
  )};
const mapStatetoProps = state => {
  return {
    restaurantList: state.restaurantList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStatetoProps, { fetchRestaurants })(RestaurantList);
