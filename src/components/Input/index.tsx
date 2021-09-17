import React from 'react';
import { InputContainer, InputText, Label } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  title: string;
}

export default function Input({ title, ...rest }: Props): JSX.Element {
  return (
    <InputContainer>
      <Label>{title}</Label>
      <InputText {...rest} autoCapitalize="none" />
    </InputContainer>
  );
}
