import * as actionTypes from "./types";
import questions from "../../data/questions.json";

const toggleQuestionVisibility = (questionsList, section, id, state, changeTo) => {
  questionsList[section][id].changes.ids.forEach((id) => {
    state.questionVisibility[id].shouldShow = changeTo;
  })
}

const questionDataReducer = (state, action) => {
  state = state || { data: {}, sections: [], questionsList: {}, questionVisibility: {}, errors: {} };

  const questionsList = {};
  const questionVisibility = {};

  let total = 0;

  const { sections } = questions.allQuestions;

  sections.forEach((section) => {
    questionsList[section] = {};

    questions.allQuestions?.[section] && questions.allQuestions?.[section].forEach((question, index) => {
      questionsList[section][question.id] = {
        ...question,
        index,
        total: total++
      };

      questionVisibility[question.id] = {
        shouldShow: question.visible,
      }
    });
  });

  state.sections = [...sections];
  state.questionsList = JSON.parse(JSON.stringify(questionVisibility));
  state.questionVisibility = JSON.parse(JSON.stringify(questionVisibility));

  switch (action.type) {
    case actionTypes.CHANGE_QUESTION_DATA:
      const { id, value, section } = action.data;

      if(value && questionsList[section][id]?.changes?.condition === true) {
        toggleQuestionVisibility(questionsList, section, id, state, true);
      } else if (!value && questionsList[section][id]?.changes?.condition === true) {    
        toggleQuestionVisibility(questionsList, section, id, state, false);
      } else if (value && questionsList[section][id]?.changes?.condition == value) {
        toggleQuestionVisibility(questionsList, section, id, state, true);
      } else if (value && questionsList[section][id]?.changes?.condition != value) {
        toggleQuestionVisibility(questionsList, section, id, state, false);
      }

      return {
        ...state,
        data: {
          ...JSON.parse(JSON.stringify(state.data)),
          [id]: value,
        },
        questionVisibility: JSON.parse(JSON.stringify(state.questionVisibility))
      };
    default:
      return state;
  }
};

export default questionDataReducer;
