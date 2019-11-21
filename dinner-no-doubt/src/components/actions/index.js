import React from "react";
import { AxiosWithAuthYelp } from "../utilities/AxiosWithAuthYelp";
import { AxiosWithAuth } from "../utilities/AxiosWithAuth";
import RestaurantChoice from "../RestaurantChoice";

export const START_FETCHING_YELP = "START_FETCHING_YELP";
export const FETCH_SUCCESS_YELP = "FETCH_SUCCESS_YELP";
export const FETCH_FAILURE_YELP = "FETCH_FAILURE_YELP";

export const START_FETCHING_HISTORY = "START_FETCHING_HISTORY";
export const FETCH_SUCCESS_HISTORY = "FETCH_SUCCESS_HISTORY";
export const FETCH_FAILURE_HISTORY = "FETCH_FAILURE_HISTORY";

export const START_POSTING_HISTORY = "START_POSTING_HISTORY";
export const POST_SUCCESS_HISTORY = "POST_SUCCESS_HISTORY";
export const POST_FAILURE_HISTORY = "POST_FAILURE_HISTORY";

export const START_PUT = "START_PUT";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";

export const START_DELETE = "START_DELETE";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const fetchRestaurants = () => dispatch => {
  dispatch({ type: START_FETCHING_YELP });
  const user = {
    zip: 73099
  };
  AxiosWithAuthYelp()
    .get(`/search?term="restaurant"&location=${user.zip}&limit=10`)
    .then(res =>
      dispatch({ type: FETCH_SUCCESS_YELP, payload: res.data.businesses })
    )
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_YELP, payload: err.response })
    );
};

export const fetchHistory = () => dispatch => {
  dispatch({ type: START_FETCHING_HISTORY });
  const user = {
    zip: 73099
  };
  AxiosWithAuth()
    .get(`/api/restaurant`)
    .then(res => dispatch({ type: FETCH_SUCCESS_HISTORY, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_HISTORY, payload: err.response })
    );
};

export const postHistory = props => dispatch => {
console.log('index.js -> %cprops:', 'color: purple', props)
  dispatch({ type: START_POSTING_HISTORY });
  AxiosWithAuth.post(`/api/restaurant`, props.restaurantChoice)
    .then(res => dispatch({ type: POST_SUCCESS_HISTORY }))
    .catch(err =>
      dispatch({ type: FETCH_FAILURE_HISTORY, payload: err.response })
    );
};

export const putSmurfs = (id, smurf) => dispatch => {
  dispatch({ type: START_PUT });
  AxiosWithAuth.put(`http://localhost:3333/smurfs/${id}, smurf`)
    .then(res => dispatch({ type: PUT_SUCCESS }))
    .catch(err => dispatch({ type: PUT_FAILURE, payload: err.response }));
};

export const deleteSmurfs = id => dispatch => {
  dispatch({ type: START_DELETE });
  AxiosWithAuth.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SUCCESS }))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }));
};
