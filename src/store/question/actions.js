import * as action from "./types";

export const changeData = (data) => ({
  type: action.CHANGE_QUESTION_DATA,
  data,
});
