// Will have combine reducer logic and also root Saga 

import { combineReducers } from "redux";
import postReducer from "./posts/reducer";

// Step 6: Whenever an action is dispatched, redux will update each top-level app state property
// using the reducer with the matching name. 
export const createRootReducer = (history) => {
  return combineReducers({
    posts: postReducer
  })
}
