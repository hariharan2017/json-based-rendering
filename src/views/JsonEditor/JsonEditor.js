import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/question";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import initialData from "../../data/questions.json";

const JsonEditor = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setInitialState(initialData));
  }, [])

  const handleChange = (event) => {
    console.log(event);
  }

  return (
    <div>
      <JSONInput
        id="json-renderer"
        placeholder={initialData}
        // colors={darktheme}
        locale={locale}
        height="550px"
        width="75vw"
        onChange={handleChange}
        waitAfterKeyPress={2000}
      />
    </div>
  );
};

export default JsonEditor;
