// reducer --- 
// fn it will take in two params (state, action, ) 
// fn must return state 

import { CREATE_REQUEST, FETCH_ERROR, FETCH_REQUEST, FETCH_REQUEST_BY_ID, FETCH_SUCCESS, UPDATE_REQUEST_BY_ID } from "./types";

const initialPostState = {
  errors: undefined,
  isLoading: true,
  postList: [],
  post: {},
  status: undefined
}

const postReducer = function(state = initialPostState, action){
  switch(action.type){
    case CREATE_REQUEST:
    case FETCH_REQUEST: 
    case FETCH_REQUEST_BY_ID:
    case UPDATE_REQUEST_BY_ID: 
      // set is loading to true 
      return {...state, isLoading: true };

    case FETCH_SUCCESS:
      // set is loading to false and will return array of obj inside state 
      return {...state, isLoading: false, postList: action.payload};;

    case FETCH_ERROR:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }

}

export default postReducer;