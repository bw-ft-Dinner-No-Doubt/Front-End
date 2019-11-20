import React, {useEffect, useState} from 'react';
import {AxiosWithAuthYelp} from './utilities/AxiosWithAuth-Yelp';
import MealWheel from './MealWheel';


const RestaurantList = () => {

        const [restaurants, setRestaurants] = useState("")
        const user ={
            zip: 73099        
        }


    useEffect(() => {
    AxiosWithAuthYelp()
    .get(`/search?term="restaurant"&location=${user.zip}&limit=5`)
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
