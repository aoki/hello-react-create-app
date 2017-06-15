import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// http://qiita.com/mgoldchild/items/5be49ea49ebc2e4d9c55#reduxflux
// http://qiita.com/mgoldchild/items/5be49ea49ebc2e4d9c55#store
const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
