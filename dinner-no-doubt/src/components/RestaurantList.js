import React, {useEffect, useState} from 'react';
import {AxiosWithAuthYelp} from './utilities/AxiosWithAuth-Yelp';
import MealWheel from './MealWheel';


const RestaurantList = () => {

        const [restaurants, setRestaurants] = useState("")


    useEffect(() => {
    AxiosWithAuthYelp()
    .get(`/search?term="restaurant"&location=73099&limit=5`)
    // .then(console.log("Results:", res))
    .then(res => {
        setRestaurants(res.data.businesses)
     })
   
    .catch(err => console.error("Something's bad in actionsYelp. Here's the error: ", err.response));
	
}, []);

return (

    <div>
        {console.log("Restaurants:",restaurants)}
    
           
                {/* <MealWheel restaurants = {[restaurants]}/> */}
               
            

    </div>
)



}
export default RestaurantList
