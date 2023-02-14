import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import initialData from "../../data/questions.json";

const JsonEditor = () => {

  const dispatch = useDispatch();
  const questionsData = useSelector((state) => state.questionData);

  useEffect(() => {
    if (Object.keys(questionsData.questionsList) == 0) {
      dispatch(actions.setInitialState(initialData));
    }
  }, []);

  const handleChange = (event) => {
    if (!event.error) {
      dispatch(actions.setInitialState(event.jsObject));
    }
  };

  return (
    <div>
      <JSONInput
        id="json-renderer"
        placeholder={questionsData.original}
        // colors={darktheme}
        locale={locale}
        height="85vh"
        width="75vw"
        onChange={handleChange}
        waitAfterKeyPress={2000}
      />
    </div>
  );
};

export default JsonEditor;
