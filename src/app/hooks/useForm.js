import { useState } from "react";
export const useForm = (data, callback) => {
  const [values, setValues] = useState(data);

  const handleChange = (e) => {
    e.persist();
    const { checked, name, type, value } = e.target;
    type === "checkbox"
      ? setValues({ ...values, [name]: checked })
      : setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
