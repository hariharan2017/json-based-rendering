import { useEffect, useState, useCallback, memo, ReactNode, SyntheticEvent } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { toast } from 'react-toastify';
import questions from "../../data/questions.json";
import Question from "./Question";
import Button from '@mui/material/Button';
import "./Questionnaire.scss";
import { formValidator } from "../../helpers/formValidator";
import { SelectChangeEvent } from '@mui/material/Select';

interface Section {
  sectionName: string,
  sectionLabel: string,
  questionOrder: number[]
}

const Questionnaire = () => {
  const [questionsList, setQuestionsList] = useState([]);

  const questionsData = useSelector((state: RootStateOrAny) => state.questionData);

  const dispatch = useDispatch();

  useEffect(() => {
    const sections: Object | any = {};
    questionsData?.sections?.forEach((section: Section) => {
      const renderedQuestions: ReactNode[] = [];
      section?.questionOrder?.forEach((key: number) => {
        if(questionsData.questionVisibility?.[key]?.shouldShow) {
          renderedQuestions.push(
          <Question
            element={questionsData.questionsList[key].element}
            key={String(questionsData.questionsList[key].id)}
            id={String(questionsData.questionsList[key].id)}
            type={questionsData.questionsList[key].type}
            label={questionsData.questionsList[key].label}
            width={questionsData.questionsList[key].colSize}
            value={questionsData.data?.[key]}
            placeholder={questionsData.questionsList[key].placeholder}
            title={questionsData.questionsList[key].title}
            name={questionsData.questionsList[key].name}
            options={questionsData.questionsList[key].options}
            errors={questionsData.errors?.[key]}
            handleOnChange={handleOnChange}
          />
        );
        }
      })
      sections[section.sectionName] = renderedQuestions;
    });
    
    setQuestionsList(sections);
  }, [JSON.stringify(questionsData)]);

  const handleOnChange = useCallback((type: string, event: SyntheticEvent<Element, Event> | SelectChangeEvent<string>, questionId: string) => {
    const id = (event.target as HTMLInputElement).id;
    const value = (event.target as HTMLInputElement).value;
    if(type === "input" || type === "material-input") {
      dispatch(actions.changeData({ id, value}));
    } else if(type === "textArea" || type === "material-textArea") {
      dispatch(actions.changeData({ id, value }));
    } else if (type === "radio" || type === "material-radio") {
      dispatch(actions.changeData({ id: questionId, value: Number(value) }));
    } else if (type === "select" || type === "material-select") {
      dispatch(actions.changeData({ id: questionId, value: Number(value) }));
    }
  }, []);

  const handleSubmit = () => {
    const errObj = {};
    for (const [key, value] of Object.entries(questionsData.questionVisibility)) {
      if(value?.shouldShow) {
        const errors = formValidator(questionsData.questionsList[key]?.validation || [], questionsData.data?.[key]);
        if(errors.length) errObj[key] = errors;
      }
    };

    dispatch(actions.setError(errObj));
    if(Object.keys(errObj).length == 0) {
      toast("Data successfully submitted", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
  };

  return (
    <div className="main-container">
      <div className="main-heading">{questions.title}</div>
      {/* <button onClick={() => dispatch(actions.fetchData())}>Test Saga</button> */}
      <div className="questions-container">
        {questionsData?.sections?.map((section: Section) => {
          return (
            <div key={section?.sectionLabel} >
              <div className="section-header">{section?.sectionLabel}</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
              {questionsList?.[section?.sectionName]?.map((question: any) => {
                return question;
              })}
              </div>
            </div>
          );
        })}
        <div className="submit-button">
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Questionnaire);
