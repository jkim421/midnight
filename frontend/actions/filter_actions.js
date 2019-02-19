export const UPDATE_SELECTION = "UPDATE_SELECTION";

export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

export const ADD_TYPE = "ADD_TYPE";
export const REMOVE_TYPE = "REMOVE_TYPE";

export const ADD_HIGH_YEAR = "ADD_HIGH_YEAR";
export const REMOVE_HIGH_YEAR = "REMOVE_HIGH_YEAR";
export const ADD_LOW_YEAR = "ADD_LOW_YEAR";
export const REMOVE_LOW_YEAR = "REMOVE_LOW_YEAR";

export const ADD_RATING = "ADD_RATING";
export const REMOVE_RATING = "REMOVE_RATING";

export const UPDATE_SCORES = "UPDATE_SCORES";

export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const RESET_GENRE = "RESET_GENRE";

export const UPDATE_SORT = "UPDATE_SORT";

export const updateSelection = (selection) => {
  return {
    type: UPDATE_SELECTION,
    selection,
  };
};
export const addCategory = (categoryId) => {
  return {
    type: ADD_CATEGORY,
    categoryId,
  };
};

export const removeCategory = (categoryId) => {
  return {
    type: REMOVE_CATEGORY,
    categoryId,
  };
};

export const addType = (showType) => {
  return {
    type: ADD_TYPE,
    showType,
  };
};

export const removeType = (showType) => {
  return {
    type: REMOVE_TYPE,
    showType,
  };
};

export const addHiYear = (year) => {
  return {
    type: ADD_HIGH_YEAR,
    year,
  };
};

export const removeHiYear = (year) => {
  return {
    type: REMOVE_HIGH_YEAR,
    year,
  };
};

export const addLowYear = (year) => {
  return {
    type: ADD_LOW_YEAR,
    year,
  };
};

export const removeLowYear = (year) => {
  return {
    type: REMOVE_LOW_YEAR,
    year,
  };
};

export const addRating = (rating) => {
  return {
    type: ADD_RATING,
    rating,
  };
};

export const removeRating = (rating) => {
  return {
    type: REMOVE_RATING,
    rating,
  };
};

export const updateScores = (scores) => {
  return {
    type: UPDATE_SCORES,
    scores,
  };
};

export const addGenre = (genreName) => {
  return {
    type: ADD_GENRE,
    genreName,
  };
};

export const removeGenre = (genreName) => {
  return {
    type: REMOVE_GENRE,
    genreName,
  };
};

export const resetGenre = () => {
  return {
    type: RESET_GENRE,
  };
};

export const updateSort = (sort) => {
  return {
    type: UPDATE_SORT,
    sort,
  };
};
