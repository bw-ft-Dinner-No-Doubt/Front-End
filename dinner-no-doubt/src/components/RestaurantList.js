import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchRestaurants } from "./actions/index";
import Slot from "react-slot-machine";

const RestaurantList = props => {
  console.log("RestaurantList.js -> %cprops:", "color: cyan", props);

  const foodPrefs = {
    spicy: 1,
    vegetarian: 0,
    vegan: 0,
    femaleOwned: 0,
    outdoor_dining: 1
  };

  const wheelData = {
    target: Math.round(Math.random() * 10),
    times: 2,
    duration: 3000,
    turn: false
  };

  // console.log('RestaurantList.js -> %ctarget:', 'color: teal', target)

  console.log("FoodPrefs:", foodPrefs);

  let terms = Object.entries(foodPrefs).forEach(pref => {
    if (pref[1] !== 0) {
      return pref[0];
    }
  });
  console.log("Terms:", terms);
  // console.log('RestaurantList.js -> %csearchTerms:', 'color: red', searchTerms)

  console.log("RestaurantList.js -> %cterms:", "color: brown", terms);

  useEffect(() => {
    props.fetchRestaurants();
  }, []);
  if (props.isFetching) {
    return <h2>Loading Restaurants...</h2>;
  }

  return (
    <section>
      {props.error && <p>{props.error}</p>}
      <div>
        <Slot
          target={wheelData.target}
          times={wheelData.times}
          duration={wheelData.duration}
        >
          {props.restaurantList.map(
            restaurant => (
              <div className="slot-style">{restaurant.name}</div>
            )
            // Children of `Slot` be sure to be `width` and `height` are 100%.
          )}
        </Slot>
      </div>
    </section>
  );
};
const mapStatetoProps = state => {
  return {
    restaurantList: state.restaurantList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStatetoProps, { fetchRestaurants })(RestaurantList);
