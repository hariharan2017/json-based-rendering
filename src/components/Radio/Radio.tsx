import { SyntheticEvent } from "react";
import "./Radio.scss";

interface Option {
  id: string,
  label: string | number
}

interface Props {
  id: string,
  name: string,
  value: string,
  title: string,
  options: Option[],
  width: string,
  onChange: (event: SyntheticEvent) => void
}

function Radio({ id, title, options, name, value, onChange, width = "100%" }: Props) {
  return (
    <div key={id} className="radio-container" style={{ width }}>
      <label className="radio-title">{title}</label>
      <div key={id} className="radio-options-container">
      {options.map((option) => {
        return (
          <div key={option.id}>
            <input className="radio-option-box" type={"radio"} key={option.id} id={option.id} value={option.id} name={name} checked={value == option.id} onChange={onChange}/>
            <label className="radio-option-label" htmlFor={option.id}>{option.label}</label>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Radio;
