import React from 'react'

import Input from './styled/Input';
import Label from './styled/Label';
import ErrorMessage from './styled/ErrorMessage';
import StyledInputField from './styled/StyledInputField';

export default ({
  type, name, placeholder, autocomplete, value, marginTop, error, onChange
}) => {
  return (
    <StyledInputField marginTop={marginTop}>
      <Label htmlFor={name}>{placeholder}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        autocomplete={autocomplete}
        onChange={onChange}
      />
      {error && error.field === name && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledInputField>
  )
}
