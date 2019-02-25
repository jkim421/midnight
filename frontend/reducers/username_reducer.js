import merge from 'lodash/merge';
import { RECEIVE_ANIME } from '../actions/user_actions';

const usernameReducer = (state = "", action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANIME:
      return action.username;
    default:
      return state;
  }
};

export default usernameReducer;
