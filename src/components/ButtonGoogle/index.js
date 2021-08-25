import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ButtonContainer, Title } from './styles';

export default function ButtonGoogle({ title, disabled, onPress }) {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
      >
        <ButtonContainer>

          <Image
            source={require('../../assets/images/googleIcon.png')}
          />
          <Title>{title}</Title>
        </ButtonContainer>
      </TouchableOpacity>
    </>
  );
}
