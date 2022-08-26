// reducer --- 
// fn it will take in two params (state, action, ) 
// fn must return state 

import { CREATE_REQUEST, FETCH_REQUEST, FETCH_REQUEST_BY_ID, FETCH_SUCCESS, UPDATE_REQUEST_BY_ID } from "./types";

const postReducer = function(state = {}, action){
  
  switch(action.type){
    case CREATE_REQUEST:
    case FETCH_REQUEST: 
    case FETCH_REQUEST_BY_ID:
    case UPDATE_REQUEST_BY_ID: 
      // set is loading to true 
      return state;

    case FETCH_SUCCESS:
      // set is loading to false and will return array of obj inside state 
      return state;

    default:
      return state;
  }

}

export default postReducer;