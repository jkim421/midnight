import merge from 'lodash/merge';
import {
  ADD_TO_SELECTED,
  REMOVE_FROM_SELECTED,
  } from '../actions/filter_actions';

const selectedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANIME:
      return merge({}, action.sortedAnime);
    default:
      return state;
  }
};

export default selectedReducer;
