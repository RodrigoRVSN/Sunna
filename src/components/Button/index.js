import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonContainer, Title } from './styles';

export default function Button({ title, disabled, onPress }) {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
      >
        <ButtonContainer>
          <Title>{title}</Title>
        </ButtonContainer>
      </TouchableOpacity>
    </>
  );
}
