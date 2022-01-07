import React from "react";

const Form = ({ children, ...rest }) => {
  return (
    <div style={{ overflow: "y" }}>
      <form {...rest}>{children}</form>
    </div>
  );
};

export default Form;
