import React, { SyntheticEvent } from "react";
import "./TextField.scss";

interface Props {
  id: string,
  type: string,
  label: string,
  value: string,
  required: boolean,
  width: string,
  disabled: boolean,
  placeholder: string,
  errors: string[],
  onChange: (event: SyntheticEvent<Element, Event>) => void
}

export default function TextField({ id, type, label, value, required = false, width, onChange, disabled = false, placeholder, errors }: Props) {
  return (
    <div className="input-container" key={id} style={{ width }}>
      {label && (
        <div className="input-label-container">
          <label htmlFor={id} className="input-label">{label}</label>
          {required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
      <input className="input-text-field" id={id} type={type} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder}/>
      {errors?.map((error) => {
        return <div className="input-error">{error}</div>
      })}
    </div>
  );
}
