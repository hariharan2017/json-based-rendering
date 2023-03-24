import { SyntheticEvent } from "react";
import "./TextArea.scss";

interface Props {
  id: string,
  label: string,
  required: boolean,
  value: string,
  placeholder: string,
  height: string,
  width: string,
  onChange: (event: SyntheticEvent) => void,
}

export default function TextArea ({ id, label, required, value, placeholder, onChange, height = "100px", width = "100%"}: Props) {
  return (
    <div className="text-area-container" key={id} style={{ width: `${width}` }}>
      <label htmlFor={id} className="text-area-label">{label}</label>
      <textarea className="text-area-styles" id={id} onChange={onChange} value={value} style={{ height: `${height}` }} placeholder={placeholder} />
    </div>
  )
}