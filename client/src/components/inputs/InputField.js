import React from "react";

const InputField = props => {
  return (
    <div>
      <label className="label">{props.label}</label>
      <input
        className="input"
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
      <div
        className="invalid-feedback"
        style={{ color: "red", fontWeight: "bold" }}
      />
    </div>
  );
};

export default InputField;
