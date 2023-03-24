import * as action from "./types";

export const setInitialState = (response: Object) => ({
  type: action.SET_INITIAL_STATE,
  response,
});

export const changeData = (data: { id: string, value: string | number }) => ({
  type: action.CHANGE_QUESTION_DATA,
  data,
});

export const setError = (err: Object) => ({
  type: action.SET_ERROR,
  err,
});
