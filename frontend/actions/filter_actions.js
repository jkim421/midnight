export const ADD_TO_LIST = "ADD_TO_LIST";
export const ADD_TO_SELECTED = "ADD_TO_SELECTED";
export const ADD_TO_SCRATCHED = "ADD_TO_SCRATCHED";

export const addToList = (animeId) => {
  return {
    type: ADD_TO_LIST,
    animeId,
  };
};

export const addToSelected = (animeId) => {
  return {
    type: ADD_TO_SELECTED,
    animeId,
  };
};

export const addToScratched = (animeId) => {
  return {
    type: ADD_TO_SCRATCHED,
    animeId,
  };
};
