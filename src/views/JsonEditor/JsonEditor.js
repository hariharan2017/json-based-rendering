import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const JsonEditor = () => {

  const handleChange = (event) => {
    console.log(event);
  }

  return (
    <div>
      <JSONInput
        id="json-renderer"
        placeholder={{}}
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
