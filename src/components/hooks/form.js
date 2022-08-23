import { useState } from 'react';

const useForm = callback => {

  const [values, setValues] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    callback(values);
  };

  const handleChange = event => {
    event.persist();
    console.log('CHANGE', event.target.name);
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };


  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;