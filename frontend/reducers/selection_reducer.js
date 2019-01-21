import merge from 'lodash/merge';
import {
  ADD_SELECTED,
  REMOVE_SELECTED,
  } from '../actions/filter_actions';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);

  const id = action.animeId;
  let selection;

  switch(action.type) {
    case ADD_SELECTED:
      selection = { id: 1 };
      return merge({}, state, updated);
    case REMOVE_SELECTED:
      selection = { id: 2 };
      return merge({}, state, updated);
    default:
      return state;
  }
};

export default filtersReducer;
