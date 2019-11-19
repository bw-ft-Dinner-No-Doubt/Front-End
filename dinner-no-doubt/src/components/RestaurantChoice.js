import React from 'react';

import React from 'react';
import PropTypes from 'prop-types';


const RestaurantChoice = (props) => {

    const[restaurantChoice, setRestaurantChoice] = useState(props.restaurant)
    const rcInfo= {
        id:props.restaurant.id,
        name: props.restaurant.name,
        category: props.restaurant.category[0].alias,
        dateVisited: Date(now)

    }
    AxiosWithAuth()
    .POST('/api/restaurants', rcInfo)
    .then(res => {
        console.log(res);
        setSubmitting(false);
    })
    .catch(err => {
        console.error('Problem in RestaurantChoicePOST:',err); // There was an error creating the data and logs to console
        setSubmitting(false);
    });

    return (
        <div>
            <h3>{props.restaurant.name}</h3>
            <p>{props.restaurant.display_phone}</p>
            <p>{props.restaurant.categories[0].alias}</p>
            <p>{props.restaurant.price}</p>
            <p>`{props.restaurant.rating} out of 5 stars`</p>
            
        </div>
    );
};

export default RestaurantChoice;
