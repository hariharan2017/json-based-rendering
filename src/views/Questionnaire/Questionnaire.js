import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { myDebounce } from "../../helpers";
import questions from "../../data/questions.json";
import TextField from "../../components/TextField";
import "./Questionnaire.scss";

function Questionnaire() {
  const questionTemp = questions.allQuestions;
  const sections = questions.allQuestions.sections;

  const questionsData = useSelector(state => state.questionData);

  const questionList = [];
  const dispatch = useDispatch();

  const handleOnChange = myDebounce((type, event) => {
    dispatch(actions.changeData({id: event.target.id, value: event.target.value}));
  });

  sections.forEach((section) => {
    questionTemp?.[section] &&
      questionTemp?.[section].forEach((question) => {
        if (question.element === "input") {
          questionList.push(
            <TextField
              key={question.id}
              id={question.id}
              type={question.type}
              label={question.label}
              required={Boolean(question.validation?.required)}
              width={question.colSize}
              onChange={(event) => handleOnChange("input", event)}
            />
          );
        }
      });
  });

  return (
    <div className="main-container">
      <div className="main-heading">{questions.title}</div>
      {/* <button onClick={() => dispatch(actions.fetchData())}>Test Saga</button> */}
      <div className="questions-container">
        {questionList.map((question) => {
          return question;
        })}
      </div>
    </div>
  );
}

export default Questionnaire;
