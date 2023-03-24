import { SyntheticEvent } from "react";
import "./Select.scss";

type Option = {
  id: string,
  label: string | number
}

type Props = {
  id: string,
  title: string,
  options: Option[],
  width: string,
  onChange: (event: SyntheticEvent) => void
}

export default function Select({ id, title, options, onChange, width = "100%" }: Props) {
  return (
    <div className="select-container" key={id} style={{ width }}>
      <label className="select-title" htmlFor={id}>{title}</label>
      <br></br>
      <select name={id} className="select-options-container" onChange={onChange}>
        <option hidden disabled selected> -- Select an Option -- </option>
        {options.map((option) => {
          return (<option key={option.id} id={option.id} value={option.id}>{option.label}</option>)
        })}
      </select>
    </div>
  );
}
