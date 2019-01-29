import merge from 'lodash/merge';
import {
  UPDATE_LOW_SCORE,
  UPDATE_HI_SCORE } from '../actions/filter_actions';

const scoresReducer = (state = [0.0, 10.0], action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_LOW_SCORE:
      state[0] = action.score;
      return state;
    case UPDATE_HI_SCORE:
      state[1] = action.score;
      return state;
    default:
      return state;
  }
};

export default scoresReducer;
