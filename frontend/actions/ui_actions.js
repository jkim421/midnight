export const START_LOAD = "START_LOAD";
export const END_LOAD = "END_LOAD";
export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const TOGGLE_SORT = "TOGGLE_SORT";
export const TOGGLE_SELECTION = "TOGGLE_SELECTION";
export const START_LIST = "START_LIST";
export const END_LIST = "END_LIST";

export const startLoad = () => {
  return {
    type: START_LOAD,
  };
};

export const endLoad = () => {
  return {
    type: END_LOAD,
  };
};

export const toggleFilter = () => {
  return {
    type: TOGGLE_FILTER,
  };
};

export const toggleSort = () => {
  return {
    type: TOGGLE_SORT,
  };
};

export const toggleSelection = () => {
  return {
    type: TOGGLE_SELECTION,
  };
};

export const startList = () => {
  return {
    type: START_LIST,
  };
};

export const endList = () => {
  return {
    type: END_LIST,
  };
};
