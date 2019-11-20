import React, { useEffect, useState } from "react";
import { AxiosWithAuthYelp } from "./utilities/AxiosWithAuth-Yelp";
import MealWheel from "./MealWheel";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState("");
  const user = {
    zip: 73099
  };
  const foodPrefs = {
    spicy: 1,
    vegetarian: 0,
    vegan: 0,
    femaleOwned: 0,
    outdoor_dining: 1
  };

  console.log("FoodPrefs:", foodPrefs);

  let terms = Object.entries(foodPrefs).forEach(pref => {
    if(pref[1] !== 0){
        return pref[0]
    }
  })
console.log('Terms:',terms)
// console.log('RestaurantList.js -> %csearchTerms:', 'color: red', searchTerms)

  console.log("RestaurantList.js -> %cterms:", "color: brown", terms);

  useEffect(() => {
    AxiosWithAuthYelp()
      .get(`/search?term="restaurant"&location=${user.zip}&limit=5`)
      // .then(console.log("Results:", res))
      .then(res => {
        setRestaurants(res.data.businesses);
      })

      .catch(err =>
        console.error(
          "Something's bad in actionsYelp. Here's the error: ",
          err.response
        )
      );
  }, []);

  return (
    <div>
      {console.log("Restaurants:", restaurants)}

      {/* <MealWheel restaurants = {[restaurants]}/> */}
    </div>
  );
};
export default RestaurantList;
