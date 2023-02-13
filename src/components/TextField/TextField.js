import React from "react";
import "./TextField.scss";

export default function TextField({ id, type, label, value, required, width, onChange, disabled, placeholder }) {
  return (
    <div className="input-container" key={id} style={{ width }}>
      {label && (
        <div className="input-label-container">
          <label htmlFor={id} className="input-label">{label}</label>
          {required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
      <input className="input-text-field" id={id} type={type} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder}/>
    </div>
  );
}
