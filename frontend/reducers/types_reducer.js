import merge from 'lodash/merge';
import {
  ADD_TYPE,
  REMOVE_TYPE } from '../actions/filter_actions';

const typesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_TYPE:
      return state.concat(action.type);
    case REMOVE_TYPE:
      return state.filter(type => type !== action.type);
    default:
      return state;
  }
};

export default typesReducer;
