import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/question";
import { toast } from 'react-toastify';
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import initialData from "../../data/questions.json";

const JsonEditor = () => {

  const dispatch = useDispatch();
  const questionsData = useSelector((state: RootStateOrAny) => state.questionData);

  useEffect(() => {
    if (Object.keys(questionsData.questionsList).length == 0) {
      dispatch(actions.setInitialState(initialData));
    }
  }, []);

  const handleChange = (event: any) => {
    if (!event.error) {
      dispatch(actions.setInitialState(event.jsObject));
      toast("Updated JSON questionnaire", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
