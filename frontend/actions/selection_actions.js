export const ADD_SELECTED = "ADD_SELECTED";
export const REMOVE_SELECTED = "REMOVE_SELECTED";

export const addSelected = ({ id, watching_status }) => {
  return {
    type: ADD_SELECTED,
    id,
    category: watching_status,
  };
};

export const removeSelected = ({ id, watching_status }) => {
  return {
    type: REMOVE_SELECTED,
    id,
    category: watching_status,
  };
};
