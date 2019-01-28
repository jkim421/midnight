import merge from 'lodash/merge';
import { RECEIVE_ANIME } from '../actions/user_actions';

const categoriesReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
