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

export const ADD_LOW_SCORE = "ADD_LOW_SCORE";
export const REMOVE_LOW_SCORE = "REMOVE_LOW_SCORE";
export const ADD_HI_SCORE = "ADD_HI_SCORE";
export const REMOVE_HI_SCORE = "REMOVE_HI_SCORE";

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

export const addHiScore = (score) => {
  return {
    type: ADD_HI_SCORE,
    score,
  };
};

export const removeHiScore = (score) => {
  return {
    type: REMOVE_HI_SCORE,
    score,
  };
};

export const addLowScore = (score) => {
  return {
    type: ADD_LOW_SCORE,
    score,
  };
};

export const removeLowScore = (score) => {
  return {
    type: REMOVE_LOW_SCORE,
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
