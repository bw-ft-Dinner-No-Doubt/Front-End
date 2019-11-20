import React from 'react';
import Slot from 'react-slot-machine';
import RestaurantList from './RestaurantList'


// import list from './my-list';

const MealWheel = (props) => {
console.log('MealWheel.js -> %cprops:', 'color: cyan', props)
 
 return (
 <div>
    <Slot >
      {
        props.restaurants.map(restaurant =>
          <div className = 'slot-style'>
            <h3>{restaurant.name}</h3>
        </div>
          // Children of `Slot` be sure to be `width` and `height` are 100%.
        
        )}
    </Slot>
  </div>
)}
  
export default MealWheel

//PROPS: restaurant chosen as restaurantChoice

// npm i --save react-slot-machine
// # or
// yarn add react-slot-machine
    
