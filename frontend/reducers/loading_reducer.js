import merge from 'lodash/merge';
import {
  START_LOAD,
  END_LOAD,
  START_LIST,
  END_LIST } from '../actions/ui_actions';

const defaultState = {
  api: false,
  list: true,
};

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_LOAD:
      return merge({}, state, { api: true });
    case END_LOAD:
      return merge({}, state, { api: false });
    case START_LIST:
      return merge({}, state, { list: true });
    case END_LIST:
      return merge({}, state, { list: false });
    default:
      return state;
  }
};

export default loadingReducer;
