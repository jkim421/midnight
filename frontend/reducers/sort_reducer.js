import merge from 'lodash/merge';
import { UPDATE_SORT } from '../actions/filter_actions';

const sortReducer = (state = 1, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_SORT:
      return action.sort;
    default:
      return state;
  }
};

export default sortReducer;
