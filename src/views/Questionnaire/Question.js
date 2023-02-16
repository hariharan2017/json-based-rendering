import Radio from "../../components/Radio";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import MaterialRadio from "../../components/MaterialRadio";
import MaterialSelect from "../../components/MaterialSelect";
import { default as MaterialTextField } from '@mui/material/TextField';
import { setMaterialWidth } from "../../helpers/utils";
import { MATERIAL_MARGIN } from "../../constants/cssConstants";

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
  name,
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
        value={value}
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
        value={value}
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
        name={name}
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
  } else if (element === "material-input") {
    return (
      <MaterialTextField
        sx={{ width: setMaterialWidth(width), margin: MATERIAL_MARGIN }}
        key={id}
        id={id}
        type={type}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  } else if (element === "material-textArea") {
    return (
      <MaterialTextField
        sx={{ width: setMaterialWidth(width), margin: MATERIAL_MARGIN }}
        key={id}
        id={id}
        type={type}
        label={label}
        value={value}
        placeholder={placeholder}
        multiline
        rows={4}
        onChange={handleChange}
      />
    )
  } else if (element === "material-radio") {
    return (
      <MaterialRadio
        id={id}
        title={title}
        options={options}
        width={width}
        value={questionsData?.data?.[id]}
        onChange={handleChange}
      />
    );
  } else if (element === "material-select") {
    return (
      <MaterialSelect
        id={id}
        title={title}
        options={options}
        width={width}
        onChange={handleChange}
      />
    );
  }
};

export default Question;
