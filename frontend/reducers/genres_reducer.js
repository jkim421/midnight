import merge from 'lodash/merge';
import {
  ADD_GENRE,
  REMOVE_GENRE } from '../actions/filter_actions';

const genresReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default genresReducer;
