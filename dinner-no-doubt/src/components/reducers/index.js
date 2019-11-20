import React from "react";
import {
    START_FETCHING_YELP,
    FETCH_SUCCESS_YELP,
    FETCH_FAILURE_YELP,
    
    START_POSTING,
    POST_SUCCESS,
    POST_FAILURE,
    
    START_PUT,
    PUT_SUCCESS,
    PUT_FAILURE,

    START_DELETE,
    DELETE_SUCCESS,
    DELETE_FAILURE    
    
} from "../actions";

const initialState = {
    restaurantList: [],
    isFetching: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_YELP:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCH_SUCCESS_YELP:
            return {
                ...state,
                isFetching: false,
                error: "",
                restaurantList: action.payload
            };

        case FETCH_FAILURE_YELP:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };

        case START_POSTING:
            return {
                ...state,
                isPosting: true,
                error: ""
            };
        case POST_SUCCESS:
            return {
                ...state,
                isPosting: false
            };
        case POST_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case START_PUT:
            return {
                ...state,
                isEditing: true,
                error: ""
            };
        case PUT_SUCCESS:
            return {
                ...state,
                isEditing: false
            };
        case PUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case START_DELETE:
            return {
                ...state,
                isEditing: false,
                error: ""
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                isEditing: false
            };
        case DELETE_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
