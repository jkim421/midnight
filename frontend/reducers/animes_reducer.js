import merge from 'lodash/merge';

const animesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default animesReducer;
