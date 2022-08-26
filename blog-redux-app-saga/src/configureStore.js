// Step 1.1: Let's create store 
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
// for debugging purpost only
import { composeWithDevTools } from 'redux-devtools-extension';

import { createRootReducer, rootSaga } from './store';

// Step 1.2 Let's export configure store function
// setting up initial state and history into the store 
export default function configureStore(history, initialState){
  const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    // Step 7: Let's exec createRootReducer(history) 
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  ); // Special param reducer is needed
  
  // NEVER FORGET TO RUN THE ROOT SAGA
  sagaMiddleware.run(rootSaga);

  console.log(store);
  return store;
}


