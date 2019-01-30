import merge from 'lodash/merge';
import { START_LOAD } from '../actions/ui_actions';
import { RECEIVE_ANIME } from '../actions/user_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOAD:
      return true;
    case RECEIVE_ANIME:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
