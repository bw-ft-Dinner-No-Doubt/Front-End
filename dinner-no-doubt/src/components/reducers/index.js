import React from "react";
import {
    START_FETCHING_YELP,
    FETCH_SUCCESS_YELP,
    FETCH_FAILURE_YELP,
    
    START_FETCHING_HISTORY,
    FETCH_SUCCESS_HISTORY,
    FETCH_FAILURE_HISTORY,

    START_POSTING_HISTORY,
    POST_SUCCESS_HISTORY,
    POST_FAILURE_HISTORY,
    
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


    /////////// Fetching Yelp Data ////////////////   
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


    /////////// Fetching restaurant history///////////////        
            case START_FETCHING_HISTORY:
                return {
                    ...state,
                    isFetching: true,
                    error: ""
                };
            case FETCH_SUCCESS_HISTORY:
                return {
                    ...state,
                    isFetching: false,
                    error: "",
                    restaurantList: action.payload
                };
    
            case FETCH_FAILURE_HISTORY:
                return {
                    ...state,
                    error: action.payload,
                    isFetching: false
                };


    /////////// Posting restaurant history///////////////            
        case START_POSTING_HISTORY:
            return {
                ...state,
                isPosting: true,
                error: ""
            };
        case POST_SUCCESS_HISTORY:
            return {
                ...state,
                isPosting: false
            };
        case POST_FAILURE_HISTORY:
            return {
                ...state,
                error: action.payload
            };

    ///////////User Reducers///////////////////        

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
