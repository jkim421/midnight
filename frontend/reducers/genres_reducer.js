import merge from 'lodash/merge';
import {
  ADD_GENRE,
  REMOVE_GENRE,
  RESET_GENRE } from '../actions/filter_actions';

const genresReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_GENRE:
      return state.concat(action.genreName);
    case REMOVE_GENRE:
      return state.filter(id => id !== action.genreName);
    case RESET_GENRE:
      return [];
    default:
      return state;
  }
};

export default genresReducer;
