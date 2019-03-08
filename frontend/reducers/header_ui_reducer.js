import merge from 'lodash/merge';
import {
  TOGGLE_FILTER,
  TOGGLE_SORT,
  TOGGLE_SELECTION,
} from '../actions/ui_actions';

const defaultState = {
  filterOpen: false,
  sortOpen: false,
  selectionOpen: false,
};

const headerUiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_FILTER:
      return merge({}, state, { filterOpen: !state.filterOpen });
    case TOGGLE_SORT:
      return merge({}, state, { sortOpen: !state.sortOpen });
    case TOGGLE_SELECTION:
      return merge({}, state, { selectionOpen: !state.selectionOpen });
    default:
      return state;
  }
};

export default headerUiReducer;
