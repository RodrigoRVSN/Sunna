import React from 'react';
import { InputContainer, InputText, Label } from './styles';

export default function Input({ title, ...rest }) {
  return (
    <InputContainer>
      <Label>{title}</Label>
      <InputText {...rest} autoCapitalize="none" />
    </InputContainer>
  );
}
