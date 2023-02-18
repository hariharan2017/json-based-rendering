import * as action from "./types";

export const setInitialState = (response) => ({
  type: action.SET_INITIAL_STATE,
  response,
});

export const changeData = (data) => ({
  type: action.CHANGE_QUESTION_DATA,
  data,
});

export const setError = (err) => ({
  type: action.SET_ERROR,
  err,
});
