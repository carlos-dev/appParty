/* eslint-disable max-len */
import { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  // console.log(value);

  function validate(valueForm) {
    if (type === false) {
      return true;
    }

    if (valueForm.length === 0) {
      setError('Campo obrigatório');
      return false;
    } if (types[type] && !types[type].regex.test(valueForm)) {
      setError(types[type].message);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange(target) {
    // setValue(target.value);
    console.log(value);
    // if (error) validate(target.value);
  }

  return {
    value, setValue, onChange, onBlur: () => validate(value), error,
  };
};

export default useForm;
