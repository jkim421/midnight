import merge from 'lodash/merge';
import {
  ADD_CATEGORY,
  REMOVE_CATEGORY } from '../actions/filter_actions';

const categoriesReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_CATEGORY:
      return state.concat(action.categoryId);
    case REMOVE_CATEGORY:
      return state.filter(id => id !== action.categoryId);
    default:
      return state;
  }
};

export default categoriesReducer;
