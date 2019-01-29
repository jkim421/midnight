export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const ADD_YEAR = "ADD_YEAR";
export const REMOVE_YEAR = "REMOVE_YEAR";

export const addCategory = (categoryId) => {
  debugger
  return {
    type: ADD_CATEGORY,
    categoryId,
  };
};

export const removeCategory = (categoryId) => {
  debugger
  return {
    type: REMOVE_CATEGORY,
    categoryId,
  };
};

export const addGenre = (genreId) => {
  return {
    type: ADD_GENRE,
    genreId,
  };
};

export const removeGenre = (genreId) => {
  return {
    type: REMOVE_GENRE,
    genreId,
  };
};
