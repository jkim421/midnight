import { combineReducers } from 'redux';
import animesReducer from './animes_reducer';

const entitiesReducer = combineReducers({
  animes: animesReducer,
});

export default entitiesReducer;
