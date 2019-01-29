import merge from 'lodash/merge';
import { RATINGS } from '../selectors/defined_tags';
import {
  ADD_RATING,
  REMOVE_RATING } from '../actions/filter_actions';

const ratingsReducer = (state = RATINGS, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_RATING:
      return state.concat(action.rating);
    case REMOVE_RATING:
      return state.filter(rating => rating !== action.rating);
    default:
      return state;
  }
};

export default ratingsReducer;
