import merge from 'lodash/merge';
import { START_LOAD, END_LOAD } from '../actions/ui_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOAD:
      return true;
    case END_LOAD:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;