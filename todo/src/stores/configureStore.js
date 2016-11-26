import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  console.log('config store');
  return createStoreWithMiddleware(rootReducer, initialState);
}
