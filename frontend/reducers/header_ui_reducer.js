import merge from 'lodash/merge';
import {
  TOGGLE_FILTER,
  TOGGLE_SORT,
} from '../actions/ui_actions';

const defaultState = {
  filterOpen: false,
  sortOpen: false,
};

const headerUiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_FILTER:
      return merge({}, state, { filterOpen: !state.filterOpen });
    case TOGGLE_SORT:
      return merge({}, state, { sortOpen: !state.sortOpen });
    default:
      return state;
  }
};

export default headerUiReducer;
