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
  onChange,
  questionsData
}) => {
  if (element === "input") {
    return (
      <TextField
        key={id}
        id={id}
        type={type}
        label={label}
        width={width}
        value={questionsData?.[id] || ""}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  } else if (element === "textArea") {
    return (
      <TextArea
        key={id}
        id={id}
        label={label}
        value={questionsData?.[id] || ""}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  } else if (element === "radio") {
    return (
      <Radio
        id={id}
        title={title}
        options={options}
        value={questionsData?.data?.[id]}
        onChange={onChange}
      />
    );
  } else if (element === "select") {
    return (
      <Select
        id={id}
        title={title}
        options={options}
        onChange={onChange}
      />
    );
  }
};

export default Question;
