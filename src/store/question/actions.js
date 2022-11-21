import * as action from "./types";

export const changeData = (data) => ({
  type: action.CHANGE_QUESTION_DATA,
  data,
});

export const questionVisibility = (tracker) => ({
  type: action.TRACK_QUESTION,
  tracker,
});
