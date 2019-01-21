import merge from 'lodash/merge';
import {
  ADD_TO_SCRATCHED,
  REMOVE_FROM_SCRATCHED,
  } from '../actions/filter_actions';

const scratchedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANIME:
      return merge({}, action.sortedAnime);
    default:
      return state;
  }
};

export default scratchedReducer;
