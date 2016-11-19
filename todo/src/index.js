import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


// Reducer
const counterReducer = (state = {count: 0}, action) => {
  const count = state.count;
  switch (action.type) {
    case 'ACTION_INCREMENT_COUNTER':
      console.log('ACTION: INCREMENT_COUNTR');
      return {count: count + action.count};
    case 'ACTION_DECREMENT_COUNTER':
      console.log('ACTION: DECRIMENT_COUNTR');
      return {count: count + action.count};
    default:
      return
  }
}


// Main ------------------------------
import { createStore } from 'react';
const store = createStore(counterReducer);

ReactDOM.render(
  <Privider store="{store}">
    <App />
  </Privider>,
  document.getElementById('root')
);
