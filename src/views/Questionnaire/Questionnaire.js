import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import questions from "../../data/questions.json";
import Question from "./Question";
import "./Questionnaire.scss";

const Questionnaire = () => {
  const [questionsList, setQuestionsList] = useState([]);

  const questionsData = useSelector((state) => state.questionData);

  const dispatch = useDispatch();

  useEffect(() => {
    const renderedQuestions = [];
    for (const [key, value] of Object.entries(questionsData.questionVisibility)) {
      if(value?.shouldShow) {
        renderedQuestions.push(
          <Question
            element={questionsData.questionsList[key].element}
            key={questionsData.questionsList[key].id}
            id={questionsData.questionsList[key].id}
            type={questionsData.questionsList[key].type}
            label={questionsData.questionsList[key].label}
            width={questionsData.questionsList[key].colSize}
            value={questionsData.data?.[key]}
            placeholder={questionsData.questionsList[key].placeholder}
            title={questionsData.questionsList[key].title}
            options={questionsData.questionsList[key].options}
            questionsData={questionsData}
            handleOnChange={handleOnChange}
          />
        );
      }
    }

    setQuestionsList(renderedQuestions);
  }, [JSON.stringify(questionsData)]);

  const handleOnChange = (type, event, questionId) => {
    if(type === "input") {
      dispatch(actions.changeData({ id: event.target.id, value: event.target.value }));
    } else if(type === "textArea") {
      dispatch(actions.changeData({ id: event.target.id, value: event.target.value }));
    } else if (type === "radio") {
      dispatch(actions.changeData({ id: questionId, value: Number(event.target.id) }));
    } else if (type === "select") {
      dispatch(actions.changeData({ id: questionId, value: Number(event.target.value) }));
    }
  };

  return (
    <div className="main-container">
      <div className="main-heading">{questions.title}</div>
      {/* <button onClick={() => dispatch(actions.fetchData())}>Test Saga</button> */}
      <div className="questions-container">
        {questionsList.map((question) => {
          return question;
        })}
      </div>
    </div>
  );
};

export default Questionnaire;
