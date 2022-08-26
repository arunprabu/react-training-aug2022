// Step 1.1: Let's create store 
import { createStore } from "redux";
import { createRootReducer } from './store';

// Step 1.2 Let's export configure store function
// setting up initial state and history into the store 
export default function configureStore(history, initialState){
  const store = createStore(
    // Step 7: Let's exec createRootReducer(history) 
    createRootReducer(history),
    initialState
  ); // Special param reducer is needed
  
  console.log(store);
  return store;
}

