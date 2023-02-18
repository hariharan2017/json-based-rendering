import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { toast } from 'react-toastify';
import questions from "../../data/questions.json";
import Question from "./Question";
import Button from '@mui/material/Button';
import "./Questionnaire.scss";

const Questionnaire = () => {
  const [questionsList, setQuestionsList] = useState([]);

  const questionsData = useSelector((state) => state.questionData);

  const dispatch = useDispatch();

  useEffect(() => {
    const sections = {};
    questionsData?.sections?.forEach((section) => {
      const renderedQuestions = [];
      section?.questionOrder?.forEach((key) => {
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
            questionsData={questionsData}
            handleOnChange={handleOnChange}
          />
        );
        }
      })
      sections[section?.sectionName] = renderedQuestions;
    });
    
    // for (const [key, value] of Object.entries(questionsData.questionVisibility)) {
    //   if(value?.shouldShow) {
    //     renderedQuestions.push(
    //       <Question
    //         element={questionsData.questionsList[key].element}
    //         key={String(questionsData.questionsList[key].id)}
    //         id={String(questionsData.questionsList[key].id)}
    //         type={questionsData.questionsList[key].type}
    //         label={questionsData.questionsList[key].label}
    //         width={questionsData.questionsList[key].colSize}
    //         value={questionsData.data?.[key]}
    //         placeholder={questionsData.questionsList[key].placeholder}
    //         title={questionsData.questionsList[key].title}
    //         name={questionsData.questionsList[key].name}
    //         options={questionsData.questionsList[key].options}
    //         questionsData={questionsData}
    //         handleOnChange={handleOnChange}
    //       />
    //     );
    //   }
    // }

    // setQuestionsList(renderedQuestions);
    setQuestionsList(sections);
  }, [JSON.stringify(questionsData)]);

  const handleOnChange = (type, event, questionId) => {
    const id = event.target.id;
    const value = event.target.value;
    if(type === "input" || type === "material-input") {
      dispatch(actions.changeData({ id, value}));
    } else if(type === "textArea" || type === "material-textArea") {
      dispatch(actions.changeData({ id, value }));
    } else if (type === "radio" || type === "material-radio") {
      dispatch(actions.changeData({ id: questionId, value: Number(value) }));
    } else if (type === "select" || type === "material-select") {
      dispatch(actions.changeData({ id: questionId, value: Number(value) }));
    }
  };

  const handleSubmit = () => {
    const errObj = {};
    for (const [key, value] of Object.entries(questionsData.questionVisibility)) {
      if(value?.shouldShow) {
        const errors = [];
        questionsData.questionsList[key]?.validation?.forEach((val) => {
          const data = questionsData.data?.[key];
          if("required" in val) {
            if(!data) errors.push(val.message);
          }
          if("min" in val) {
            if(data?.length < val.min) errors.push(val.message);
          }
          if("max" in val) {
            if(data?.length > val.max) errors.push(val.message);
          }
          if("pattern" in val) {
            if(!data?.match(val.pattern)) errors.push(val.message);
          }
        });
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
        {questionsData?.sections?.map((section) => {
          return (
            <div key={section?.sectionLabel} >
              <div className="section-header">{section?.sectionLabel}</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
              {questionsList?.[section?.sectionName]?.map((question) => {
                return question;
              })}
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
