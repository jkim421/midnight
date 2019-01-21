export const ADD_SELECTED = "ADD_SELECTED";
export const REMOVE_SELECTED = "REMOVE_SELECTED";

export const addSelected = (animeId) => {
  return {
    type: ADD_SELECTED,
    animeId,
  };
};

export const removeSelected = (animeId) => {
  return {
    type: REMOVE_SELECTED,
    animeId,
  };
};
