import React from "react";
import { AxiosWithAuthYelp } from "../utilities/AxiosWithAuthYelp";
import { AxiosWithAuth } from "../utilities/AxiosWithAuth";

export const START_FETCHING_YELP = "START_FETCHING_YELP";
export const FETCH_SUCCESS_YELP = "FETCH_SUCCESS_YELP";
export const FETCH_FAILURE_YELP = "FETCH_FAILURE_YELP";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const START_POSTING = "START_POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const START_PUT = "START_POSTING";
export const PUT_SUCCESS = "POST_SUCCESS";
export const PUT_FAILURE = "POST_FAILURE";

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

export const postSmurfs = smurf => dispatch => {
  dispatch({ type: START_POSTING });
  AxiosWithAuth.post(`http://localhost:3333/smurfs`, smurf)
    .then(res => dispatch({ type: POST_SUCCESS }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
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
