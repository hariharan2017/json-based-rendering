import React from "react";
import "./TextField.scss";

export default function TextField({ id, type, label, required, width, onChange, disabled }) {
  return (
    <div className="input-container" style={{ width }} key={id}>
      {label && (
        <>
          <label className="input-label">{label}</label>
          {required && <span style={{ color: "red" }}>*</span>}
        </>
      )}
      <input className="input-text-field" id={id} type={type} onChange={onChange} disabled={disabled}/>
    </div>
  );
}
