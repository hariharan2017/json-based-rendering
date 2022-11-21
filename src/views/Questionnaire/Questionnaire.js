import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { myDebounce } from "../../helpers";
import questions from "../../data/questions.json";
import TextField from "../../components/TextField";
import TextArea from "../../components/TextArea";
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
            if (question.element === "input") {
              questionListInitial.push(
                <TextField
                  key={question.id}
                  id={question.id}
                  type={question.type}
                  label={question.label}
                  required={question.validation?.required}
                  width={question.colSize}
                  value={questionsData?.[question.id] || ""}
                  onChange={(event) => handleOnChange("input", event, section)}
                />
              );
            } else if (question.element === "textArea") {
              questionListInitial.push(
                <TextArea
                  key={question.id}
                  id={question.id}
                  label={question.label}
                  required={question.validation?.required}
                  value={questionsData?.[question.id] || ""}
                  onChange={(event) => handleOnChange("input", event, section)}
                />
              );
            }
          }
        });
    });

    setQuestionsList(questionListInitial);
  }, [JSON.stringify(questionsData.questionVisibility)]);

  const handleOnChange = myDebounce((type, event, section) => {
    dispatch(actions.changeData({ id: event.target.id, value: event.target.value, section }));
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
