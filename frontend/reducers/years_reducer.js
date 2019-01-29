import merge from 'lodash/merge';
import {
  ADD_HIGH_YEAR,
  REMOVE_HIGH_YEAR,
  ADD_LOW_YEAR,
  REMOVE_LOW_YEAR } from '../actions/filter_actions';

const yearsReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_HIGH_YEAR:
      return state.concat(action.categoryId);
    case REMOVE_HIGH_YEAR:
      return state.filter(id => id !== action.categoryId);
    default:
      return state;
  }
};

export default yearsReducer;
