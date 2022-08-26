// Will have combine reducer logic and also root Saga 

import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import postReducer from "./posts/reducer";
import postsSaga from "./posts/sagas";

// Step 6: Whenever an action is dispatched, redux will update each top-level app state property
// using the reducer with the matching name. 
export const createRootReducer = (history) => {
  return combineReducers({
    posts: postReducer
  })
}

// creating root saga here itself.. it can be in rootSaga.js file also 
export function* rootSaga(){
  yield all([
    fork(postsSaga),
    // another feature's saga can come here
  ])
}

