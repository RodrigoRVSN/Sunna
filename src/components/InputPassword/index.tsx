import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  IconContainer,
  InputContainer,
  InputText,
  Label,
  InputContent,
} from './styles';
import { useTheme } from 'styled-components';

interface Props extends TextInputProps {
  title: string;
  value?: string;
}

export default function InputPassword({
  title,
  value,
  ...rest
}: Props): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const theme = useTheme();

  function handleShowPassword() {
    setIsVisible(!isVisible);
  }

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

      <InputContent isFocused={isFocused || isFilled}>
        <InputText
          {...rest}
          autoCapitalize="none"
          secureTextEntry={isVisible}
          onFocus={inputOnFocus}
          onBlur={inputOnBlur}
          isFocused={isFocused}
        />

        <BorderlessButton onPress={handleShowPassword}>
          <IconContainer isFocused={isFocused}>
            <Feather
              name={isVisible ? 'eye' : 'eye-off'}
              size={24}
              color={
                isFocused || isFilled ? theme.colors.primaryLight : theme.colors.primaryDark
              }
            />
          </IconContainer>
        </BorderlessButton>
      </InputContent>
    </InputContainer>
  );
}
