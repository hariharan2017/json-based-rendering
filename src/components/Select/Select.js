import "./Select.scss";

export default function Select({ id, title, options, onChange, width = "100%" }) {
  return (
    <div className="select-container" key={id} style={{ width }}>
      <label className="select-title" for={id}>{title}</label>
      <br></br>
      <select name={id} className="select-options-container" onChange={onChange}>
        <option hidden disabled selected value> -- Select an Option -- </option>
        {options.map((option) => {
          return (<option key={option.id} id={option.id} value={option.id}>{option.label}</option>)
        })}
      </select>
    </div>
  );
}
