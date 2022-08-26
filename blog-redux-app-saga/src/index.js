import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Let's work on to get the store data 
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// getting store data with history
const store = configureStore(history);
console.log(store); // we have the store data. 

// let's provide the store data to the whole app. 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> { /* providing store data */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
