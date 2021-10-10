import React, { useState } from 'react';
import { InputContainer, InputText, Label } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  title: string;
  value?: string;
}

export default function Input({ title, value, ...rest }: Props): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function inputOnFocus() {
    setIsFocused(true);
  }

  function inputOnBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <InputContainer>
      <Label>{title}</Label>
      <InputText
        {...rest}
        autoCapitalize="none"
        onBlur={inputOnBlur}
        onFocus={inputOnFocus}
        isFocused={isFocused || isFilled}
      />
    </InputContainer>
  );
}
