import merge from 'lodash/merge';
import { TYPES } from '../selectors/defined_tags';
import {
  ADD_TYPE,
  REMOVE_TYPE } from '../actions/filter_actions';

const typesReducer = (state = TYPES, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case ADD_TYPE:
      return state.concat(action.showType);
    case REMOVE_TYPE:
      return state.filter(type => type !== action.showType);
    default:
      return state;
  }
};

export default typesReducer;
