import React from "react";
import "./TextField.scss";

export default function TextField({ id, type, label, required, width, onChange, disabled }) {
  return (
    <div className="input-container" style={{ width }} key={id}>
      {label && (
        <div className="input-label-container">
          <label className="input-label">{label}</label>
          {required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
      <input className="input-text-field" id={id} type={type} onChange={onChange} disabled={disabled}/>
    </div>
  );
}
