import { memo, SyntheticEvent } from "react";
import Radio from "../../components/Radio";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import MaterialRadio from "../../components/MaterialRadio";
import MaterialSelect from "../../components/MaterialSelect";
import { default as MaterialTextField } from "@mui/material/TextField";
import { setMaterialWidth } from "../../helpers/utils";
import { MATERIAL_MARGIN } from "../../constants/cssConstants";
import { SelectChangeEvent } from '@mui/material/Select';

interface Option {
  id: string;
  label: string | number;
}

interface QuestionProps {
  element: string;
  id: string;
  type: string;
  label: string;
  width: string;
  value: string;
  placeholder: string;
  title: string;
  name: string;
  errors: string[];
  options: Option[];
  handleOnChange: (element: string, event: SyntheticEvent<Element, Event> | SelectChangeEvent<string>, id: string) => void;
}

const Question = ({
  element,
  id,
  type,
  label,
  width,
  value,
  placeholder,
  title,
  options,
  name,
  errors,
  handleOnChange
}: QuestionProps) => {
  const handleChange = (event: SyntheticEvent<Element, Event> | SelectChangeEvent<string>): void => {
    handleOnChange(element, event, id);
  };

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
        errors={errors}
        onChange={handleChange}
        required={false}
        disabled={false}
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
        required={false}
        height={""}
        width={""}
      />
    );
  } else if (element === "radio") {
    return (
      <Radio
        id={id}
        title={title}
        options={options}
        value={value}
        name={name}
        onChange={handleChange}
        width={""}
      />
    );
  } else if (element === "select") {
    return (
      <Select
        id={id}
        title={title}
        options={options}
        onChange={handleChange}
        width={""}
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
        error={errors?.length > 0}
        helperText={errors?.[0]}
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
        error={errors?.length > 0}
        helperText={errors?.[0]}
        onChange={handleChange}
      />
    );
  } else if (element === "material-radio") {
    return (
      <MaterialRadio
        id={id}
        title={title}
        options={options}
        width={width}
        value={value}
        error={errors?.length > 0}
        helperText={errors?.[0]}
        onChange={handleChange}
        name={name}
      />
    );
  } else if (element === "material-select") {
    return (
      <MaterialSelect
        id={id}
        title={title}
        options={options}
        width={width}
        error={errors?.length > 0}
        helperText={errors?.[0]}
        onChange={handleChange}
        value={value}
      />
    );
  } else if (element === "spacer") {
    return <div style={{ width }} />;
  }
};

export default memo(Question);
