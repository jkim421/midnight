export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const ADD_GENRE = "ADD_GENRE";
export const REMOVE_GENRE = "REMOVE_GENRE";
export const ADD_YEAR = "ADD_YEAR";
export const REMOVE_YEAR = "REMOVE_YEAR";


export const addCategory = ({ animeId, category }) => {
  return {
    type: ADD_SELECTED,
    animeId,
    category,
  };
};

export const removeCategory = ({ animeId, category }) => {
  return {
    type: REMOVE_SELECTED,
    animeId,
    category,
  };
};
