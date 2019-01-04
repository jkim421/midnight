import { combineReducers } from 'redux';
import animesReducer from './animes_reducer';

const entitiesReducer = combineReducers({
  users: animesReducer,
});

export default entitiesReducer;
