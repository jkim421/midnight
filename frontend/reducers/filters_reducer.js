import merge from 'lodash/merge';
import selectionFilterReducer from './selection_filter_reducer';
import categoriesReducer from './categories_reducer';
import typesReducer from './types_reducer';
import yearsReducer from './years_reducer';
import ratingsReducer from './ratings_reducer';
import scoresReducer from './scores_reducer';
import genresReducer from './genres_reducer';
import sortReducer from './sort_reducer';
import { combineReducers } from 'redux';

const filtersReducer = combineReducers({
  selectionDisplay: selectionFilterReducer,
  categories: categoriesReducer,
  types: typesReducer,
  years: yearsReducer,
  ratings: ratingsReducer,
  scores: scoresReducer,
  genres: genresReducer,
  sort: sortReducer,
});

export default filtersReducer;
