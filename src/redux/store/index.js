import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import catReducer from '../reducer';
const reducers = combineReducers({ catReducer });

const store = createStore(reducers, composeWithDevTools());


export default store;