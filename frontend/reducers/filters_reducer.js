import merge from 'lodash/merge';
import categoriesReducer from './categories_reducer';
import genresReducer from './genres_reducer';
import { combineReducers } from 'redux';

const filtersReducer = combineReducers({
  categories: categoriesReducer,
  genres: genresReducer,
});

export default filtersReducer;
