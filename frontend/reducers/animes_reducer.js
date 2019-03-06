import merge from 'lodash/merge';
import { RECEIVE_ANIME } from '../actions/user_actions';

const animesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ANIME:
      return merge({}, action.processedAnime);
    default:
      return state;
  }
};

export default animesReducer;
