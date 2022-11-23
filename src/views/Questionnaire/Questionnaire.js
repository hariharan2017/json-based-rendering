import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { myDebounce } from "../../helpers";
import questions from "../../data/questions.json";
import Question from "./Question";
import "./Questionnaire.scss";

const Questionnaire = () => {
  const [questionsList, setQuestionsList] = useState([]);

  const questionTemp = questions.allQuestions;
  const sections = questions.allQuestions.sections;

  const questionsData = useSelector((state) => state.questionData);

  const dispatch = useDispatch();

  useEffect(() => {
    const questionListInitial = [];

    sections.forEach((section) => {
      questionTemp?.[section] &&
        questionTemp?.[section].forEach((question) => {
          if (questionsData.questionVisibility[question.id].shouldShow !== false) {
            questionListInitial.push(
              <Question
                element={question.element}
                key={question.id}
                id={question.id}
                type={question.type}
                label={question.label}
                width={question.colSize}
                value={questionsData?.[question.id] || ""}
                placeholder={question.placeholder}
                title={question.title}
                options={question.options}
                section={section}
                questionsData={questionsData}
                handleOnChange={handleOnChange}
              />
            );
          }
        });
    });

    setQuestionsList(questionListInitial);
  }, [JSON.stringify(questionsData)]);

  const handleOnChange = myDebounce((type, event, section, questionId) => {
    if(type === "input") {
      dispatch(actions.changeData({ id: event.target.id, value: event.target.value, section }));
    } else if(type === "textArea") {
      dispatch(actions.changeData({ id: event.target.id, value: event.target.value, section }));
    } else if (type === "radio") {
      dispatch(actions.changeData({ id: questionId, value: Number(event.target.id), section }));
    } else if (type === "select") {
      dispatch(actions.changeData({ id: questionId, value: Number(event.target.value), section }));
    }
  });

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
