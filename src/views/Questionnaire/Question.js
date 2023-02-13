import Radio from "../../components/Radio";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";

const Question = ({
  element,
  key,
  id,
  type,
  label,
  required,
  width,
  value,
  placeholder,
  title,
  options,
  questionsData,
  handleOnChange,
}) => {
  const handleChange = (event) => {
    handleOnChange(element, event, id)
  }

  if (element === "input") {
    return (
      <TextField
        key={id}
        id={id}
        type={type}
        label={label}
        width={width}
        // value={questionsData?.[id] || ""}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  } else if (element === "textArea") {
    return (
      <TextArea
        key={id}
        id={id}
        label={label}
        // value={questionsData?.data?.[id] || ""}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  } else if (element === "radio") {
    return (
      <Radio
        id={id}
        title={title}
        options={options}
        value={questionsData?.data?.[id]}
        onChange={handleChange}
      />
    );
  } else if (element === "select") {
    return (
      <Select
        id={id}
        title={title}
        options={options}
        onChange={handleChange}
      />
    );
  }
};

export default Question;
