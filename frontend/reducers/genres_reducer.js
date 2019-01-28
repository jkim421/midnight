import merge from 'lodash/merge';

const genresReducer = (state = [6], action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default genresReducer;
