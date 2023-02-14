import * as actionTypes from "./types";
import questions from "../../data/questions.json";

const toggleQuestionVisibility = (questionsList, id, state, changeTo) => {
  questionsList[id].changes.ids.forEach((id) => {
    state.questionVisibility[id].shouldShow = changeTo;
  })
}

const questionDataReducer = (state, action) => {
  state = state || { data: {}, sections: [], questionsList: {}, questionVisibility: {}, errors: {} };

  switch (action.type) {
    case actionTypes.SET_INITIAL_STATE:
      const initialData = {};
      const initialQuestionsSectionList = {};
      const initialQuestionsList = {};
      const initialQuestionVisibility = {};
    
      let total = 0;
    
      const { sections: resSections } = questions.allQuestions;
    
      resSections.forEach((section) => {
        initialQuestionsSectionList[section] = {};
        initialQuestionsList[section] = {};
    
        questions.allQuestions?.[section] && questions.allQuestions?.[section].forEach((question, index) => {
          initialData[question.id] = question?.value;

          initialQuestionsSectionList[section][question.id] = {
            ...question,
            index,
            total: total++
          };
    
          initialQuestionsList[question.id] = {
            ...question,
            index,
            total: total++
          };
    
          initialQuestionVisibility[question.id] = {
            shouldShow: question.visible,
          }
        });
      });

      return {
        ...state,
        data: {...initialData},
        sections: [...resSections],
        questionsSectionList: JSON.parse(JSON.stringify(initialQuestionsSectionList)),
        questionsList: JSON.parse(JSON.stringify(initialQuestionsList)),
        questionVisibility: JSON.parse(JSON.stringify(initialQuestionVisibility)),
      }

    case actionTypes.CHANGE_QUESTION_DATA:
      const { id, value } = action.data;
      const questionCondition = state.questionsList[id]?.changes?.condition;
      if(value && questionCondition && questionCondition === true) {
        toggleQuestionVisibility(state.questionsList, id, state, true);
      } else if (!value && questionCondition && questionCondition === true) {    
        toggleQuestionVisibility(state.questionsList, id, state, false);
      } else if (value && questionCondition && Array.isArray(questionCondition) && questionCondition.indexOf(value) > -1) {
        toggleQuestionVisibility(state.questionsList, id, state, true);
      } else if (value && questionCondition && Array.isArray(questionCondition) && questionCondition.indexOf(value) == -1) {
        toggleQuestionVisibility(state.questionsList, id, state, false);
      } else if (value && questionCondition && questionCondition == value) {
        toggleQuestionVisibility(state.questionsList, id, state, true);
      } else if (value && questionCondition && questionCondition != value) {
        toggleQuestionVisibility(state.questionsList, id, state, false);
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
