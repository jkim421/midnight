import merge from 'lodash/merge';
import {
  ADD_RATING,
  REMOVE_RATING } from '../actions/filter_actions';

const ratingsReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_RATING:
      return state.concat(action.categoryId);
    case REMOVE_RATING:
      return state.filter(id => id !== action.categoryId);
    default:
      return state;
  }
};

export default ratingsReducer;
