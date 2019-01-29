import merge from 'lodash/merge';
import {
  ADD_HI_SCORE,
  REMOVE_HI_SCORE,
  ADD_LOW_SCORE,
  REMOVE_LOW_SCORE } from '../actions/filter_actions';

const scoresReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_HI_SCORE:
      return state.concat(action.categoryId);
    case REMOVE_HI_SCORE:
      return state.filter(id => id !== action.categoryId);
    default:
      return state;
  }
};

export default scoresReducer;
