import * as action from "./types";

export const setInitialState = () => ({
  type: action.SET_INITIAL_STATE,
});

export const changeData = (data) => ({
  type: action.CHANGE_QUESTION_DATA,
  data,
});
