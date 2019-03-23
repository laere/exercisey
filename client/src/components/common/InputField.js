import React from "react";

const InputField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input" type={type} {...input} />
      <div style={{ color: "red", fontWeight: "bold" }}>{touched && error}</div>
    </div>
  );
};

export default InputField;
