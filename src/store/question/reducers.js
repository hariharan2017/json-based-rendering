import * as actionTypes from "./types";
import questions from "../../data/questions.json";

const questionDataReducer = (state, action) => {
  state = state || { data: {}, questionTracker: {} };

  const questionTracker = {};
  const { sections } = questions.allQuestions;
  sections.forEach((section) => {
    questions.allQuestions?.[section] && questions.allQuestions?.[section].forEach((question) => {
      questionTracker[question.id] = {
        visible: question.visible,
        depends: question.depends || null,
      }
    });
  });

  switch (action.type) {
    case actionTypes.CHANGE_QUESTION_DATA:
      return {
        ...state,
        data: {
          ...JSON.parse(JSON.stringify(state.data)),
          [action.data.id]: action.data.value,
        },
      };
    case actionTypes.TRACK_QUESTION:
      return {
        ...state,
        questionTracker: {
          ...JSON.parse(JSON.stringify(state.questionTracker)),
          [action.data.id]: action.data.visibility,
        },
      };
    default:
      return state;
  }
};

export default questionDataReducer;
