import merge from 'lodash/merge';
import {
  ADD_GENRE,
  REMOVE_GENRE } from '../actions/filter_actions';

const genresReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_GENRE:
      return state.concat(action.genreId);
    case REMOVE_GENRE:
      return state.filter(id => id !== action.genreId);
    default:
      return state;
  }
};

export default genresReducer;
