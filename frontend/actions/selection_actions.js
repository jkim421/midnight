export const ADD_SELECTED = "ADD_SELECTED";
export const REMOVE_SELECTED = "REMOVE_SELECTED";

export const addSelected = ({ animeId, category }) => {
  return {
    type: ADD_SELECTED,
    animeId,
    category,
  };
};

export const removeSelected = ({ animeId, category }) => {
  return {
    type: REMOVE_SELECTED,
    animeId,
    category,
  };
};
