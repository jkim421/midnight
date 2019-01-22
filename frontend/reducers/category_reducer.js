import merge from 'lodash/merge';
import { RECEIVE_ANIME } from '../actions/user_actions';

const categoryReducer = (state = "planToWatch", action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default categoryReducer;
