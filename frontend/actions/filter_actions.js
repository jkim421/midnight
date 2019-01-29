export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

export const ADD_TYPE = "ADD_TYPE";
export const REMOVE_TYPE = "REMOVE_TYPE";

export const ADD_HI_YEAR = "ADD_HI_YEAR";
export const REMOVE_HI_YEAR = "REMOVE_HI_YEAR";
export const ADD_LOW_YEAR = "ADD_LOW_YEAR";
export const REMOVE_LOW_YEAR = "REMOVE_LOW_YEAR";

export const ADD_RATING = "ADD_RATING";
export const REMOVE_RATING = "REMOVE_RATING";

export const UPDATE_LOW_SCORE = "UPDATE_LOW_SCORE";
export const UPDATE_HI_SCORE = "UPDATE_HI_SCORE";

export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";

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
    type: ADD_HI_YEAR,
    year,
  };
};

export const removeHiYear = (year) => {
  return {
    type: REMOVE_HI_YEAR,
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

export const updateLowScore = (score) => {
  return {
    type: UPDATE_LOW_SCORE,
    score,
  };
};

export const updateHiScore = (score) => {
  return {
    type: UPDATE_HI_SCORE,
    score,
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
