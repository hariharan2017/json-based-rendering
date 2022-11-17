import * as actionTypes from "./types";

const questionDataReducer = (state, action) => {
  state = state || { data: {} };

  switch (action.type) {
    case actionTypes.CHANGE_QUESTION_DATA:
      return {
        ...state,
        data: { ...JSON.parse(JSON.stringify(state.data)), [action.data.id]: action.data.value },
      };
    default:
      return state;
  }
};

export default questionDataReducer;
