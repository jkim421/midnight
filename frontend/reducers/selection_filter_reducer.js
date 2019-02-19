import merge from 'lodash/merge';
import { UPDATE_SELECTION } from '../actions/filter_actions';

const selectionFilterReducer = (state = "1", action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_SELECTION:
      return action.selection;
    default:
      return state;
  }
};

export default selectionFilterReducer;
