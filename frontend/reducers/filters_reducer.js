import merge from 'lodash/merge';
import categoriesReducer from './categories_reducer';
import typesReducer from './types_reducer';
import yearsReducer from './years_reducer';
import ratingsReducer from './ratings_reducer';
import scoresReducer from './scores_reducer';
import genresReducer from './genres_reducer';
import { combineReducers } from 'redux';

const filtersReducer = combineReducers({
  categories: categoriesReducer,
  types: typesReducer,
  years: yearsReducer,
  ratings: ratingsReducer,
  scores: scoresReducer,
  genres: genresReducer,
});

export default filtersReducer;
