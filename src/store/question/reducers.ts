import * as actionTypes from "./types";

const toggleQuestionVisibility = (questionsList: any, id: number, state: any, changeTo: boolean) => {
  questionsList[id].changes.ids.forEach((id: number) => {
    state.questionVisibility[id].shouldShow = changeTo;
  })
}

interface ActionProps {
  type: string, 
  response: any, 
  err: string, 
  data: Object
}

const questionDataReducer = (state: any, action: ActionProps) => {
  state = state || { data: {}, sections: [], questionsList: {}, questionVisibility: {}, errors: {}, original: null };

  switch (action.type) {
    case actionTypes.SET_INITIAL_STATE:
      const initialData = {};
      const initialQuestionsSectionList = {};
      const initialQuestionsList = {};
      const initialQuestionVisibility = {};
    
      let total = 0;
    
      const { sections: resSections } = action.response?.allQuestions;
    
      resSections.forEach(({sectionName}) => {
        initialQuestionsSectionList[sectionName] = {};
        initialQuestionsList[sectionName] = {};
    
        action.response?.allQuestions?.[sectionName] && action.response?.allQuestions?.[sectionName].forEach((question, index) => {
          initialData[question.id] = question?.value;

          initialQuestionsSectionList[sectionName][question.id] = {
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
        original: action.response,
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

    case actionTypes.SET_ERROR:
      return {
        ...state,
        errors: action.err
      }
    default:
      return state;
  }
};

export default questionDataReducer;
