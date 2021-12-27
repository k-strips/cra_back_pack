import { useState } from "react";
export const useForm = (data, callback) => {
  const [values, setValues] = useState(data);

  const handleChange = (e) => {
    e.persist();
    const { checked, name, type, value } = e.target;
    type === "checkbox"
      ? setValues({ ...data, [name]: checked })
      : setValues({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(values);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};
