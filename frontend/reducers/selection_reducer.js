import merge from 'lodash/merge';
import {
  ADD_SELECTED,
  REMOVE_SELECTED, }
    from '../actions/selection_actions';

const defaultState = {
  1: [],
  2: [],
  3: [],
  4: [],
  6: [],
};

const selectionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  const id = action.id;
  const category = action.category;

  let selection = state[category];
  let newState = merge({}, state);

  switch(action.type) {
    case ADD_SELECTED:
      selection.push(id);
      newState[category] = selection;
      return newState;
    case REMOVE_SELECTED:
      selection = selection.filter( showId => showId !== id );
      newState[category] = selection;
      return newState;
    default:
      return state;
  }
};

export default selectionReducer;
