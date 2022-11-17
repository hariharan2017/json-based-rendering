import { combineReducers } from "redux";
import { reducers as testReducers } from "./test";
import { reducers as questionReducers } from "./question";

export default combineReducers({
  test: testReducers,
  questionData: questionReducers
});
