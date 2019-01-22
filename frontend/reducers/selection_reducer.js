import merge from 'lodash/merge';
import {
  ADD_SELECTED,
  REMOVE_SELECTED, }
    from '../actions/selection_actions';

const selectionReducer = (state = {}, action) => {
  Object.freeze(state);

  const id = action.animeId;
  const category = action.category;
  let selection = { id: category };

  switch(action.type) {
    case ADD_SELECTED:
      return merge({}, state, selection);
    case REMOVE_SELECTED:
      let newState = merge({}, state);
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default selectionReducer;
