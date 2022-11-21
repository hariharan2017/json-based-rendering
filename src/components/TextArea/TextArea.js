import "./TextArea.scss";

export default function TextArea ({ id, label, required, onChange, height = "100px", width = "100%"}) {
  return (
    <div className="text-area-container" key={id} style={{ width: `${width}` }}>
      <label className="text-area-label">{label}</label>
      <textarea className="text-area-styles" id={id} onChange={onChange} style={{ height: `${height}` }} />
    </div>
  )
}