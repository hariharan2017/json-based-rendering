import "./Radio.scss";

export default function Radio({ id, title, options, value, onChange }) {
  return (
    <div key={id} className="radio-container">
      <label className="radio-title">{title}</label>
      <div key={id} className="radio-options-container">
      {options.map((option) => {  
        return (
          <div key={option.id}>
            <input className="radio-option-box" type={"radio"} key={option.id} id={option.id} name={option.name} checked={value == option.id} onChange={onChange}/>
            <label className="radio-option-label" htmlFor={option.label}>{option.label}</label>
          </div>
        );
      })}
      </div>
    </div>
  );
}
