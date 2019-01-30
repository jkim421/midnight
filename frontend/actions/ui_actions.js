export const START_LOAD = "START_LOAD";
export const END_LOAD = "END_LOAD";

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
