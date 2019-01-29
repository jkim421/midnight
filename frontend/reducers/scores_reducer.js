import merge from 'lodash/merge';
import { UPDATE_SCORES } from '../actions/filter_actions';

const scoresReducer = (state = ["0.0", "10.0"], action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_SCORES:
      return action.scores;
    default:
      return state;
  }
};

export default scoresReducer;
