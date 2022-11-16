import React from "react";
import "./TextField.scss";

export default function TextField({ type, label, required, width }) {
  return (
    <div className="input-container" style={{ width }}>
      {label && (
        <>
          <label className="input-label">{label}</label>
          {required && <span style={{ color: "red" }}>*</span>}
        </>
      )}
      <input className="input-text-field" type={type} />
    </div>
  );
}
