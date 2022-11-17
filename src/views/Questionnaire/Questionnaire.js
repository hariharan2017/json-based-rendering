import { useDispatch } from "react-redux";
import { actions } from "../../store/test";
import questions from "../../data/questions.json";
import TextField from "../../components/TextField";
import "./Questionnaire.scss";

function Questionnaire() {
  const questionTemp = questions.allQuestions;
  const sections = questions.allQuestions.sections;

  const questionList = [];
  const dispatch = useDispatch();

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
              width={question.colSize}
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
