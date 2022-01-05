import React from "react";

const Input = ({ className, label, id, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input {...rest} />
    </div>
  );
};

const TextArea = (className, id, label, ...rest) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...rest}></textarea>
    </div>
  );
};

export { Input, TextArea };
