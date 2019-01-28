import merge from 'lodash/merge';
import {
  ADD_CATEGORY,
  REMOVE_CATEGORY } from '../actions/filter_actions';

const categoriesReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
