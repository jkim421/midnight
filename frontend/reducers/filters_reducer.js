import merge from 'lodash/merge';
import {
  ADD_TO_LIST,
  ADD_TO_SELECTED,
  ADD_TO_SCRATCHED,
  } from '../actions/filter_actions';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);

  const id = action.animeId;
  let updated;

  switch(action.type) {
    case ADD_TO_LIST:
      updated = { id: 1 };
      return merge({}, state, updated);
    case ADD_TO_SELECTED:
      updated = { id: 2 };
      return merge({}, state, updated);
    case ADD_TO_SCRATCHED:
      updated = { id: 3 };
      return merge({}, state, updated);
    default:
      return state;
  }
};

export default filtersReducer;
