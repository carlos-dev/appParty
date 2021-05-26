import React from 'react';

import { Input, TextError } from '../styles/globalStyles';

export default function InputComponent({
  placeholder, secureTextEntry, value, setValue, onChange, error, onBlur,
}) {
  return (
    <>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#535466"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <TextError>{error}</TextError>}
    </>
  );
}
