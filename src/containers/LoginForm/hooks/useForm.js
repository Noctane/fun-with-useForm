import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleBlur = () => {
    setErrors(validate(values));
  };

  const handleFocus = () => {
    setErrors({});
  };


  const handleChange = event => {
    event.persist();
    setValues(val => ({
      ...val,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setValues({});
  }

  return {
    handlers: {
      handleChange,
      handleSubmit,
      handleBlur,
      handleFocus,
      reset,
    },
    values,
    errors,
  };
};

export default useForm;
