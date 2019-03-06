import merge from 'lodash/merge';
import {
  ADD_SELECTED,
  REMOVE_SELECTED, }
    from '../actions/selection_actions';
import { RESET_SELECTION } from '../actions/filter_actions';

const selectionReducer = (state = [], action) => {
  Object.freeze(state);

  const id = action.id;
  const category = action.category;

  let newState = state.slice(0);

  switch(action.type) {
    case ADD_SELECTED:
      newState.push(id);
      return newState;
    case REMOVE_SELECTED:
      newState = newState.filter( showId => showId !== id);
      return newState;
    case RESET_SELECTION:
      return [];
    default:
      return state;
  }
};

export default selectionReducer;
