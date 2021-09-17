import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ButtonContainer, Title } from './styles';

type ButtonGoogleProps = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
};

export default function ButtonGoogle({
  title,
  disabled,
  onPress,
}: ButtonGoogleProps): JSX.Element {
  return (
    <>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <ButtonContainer>
          <Image source={require('../../assets/images/googleIcon.png')} />
          <Title>{title}</Title>
        </ButtonContainer>
      </TouchableOpacity>
    </>
  );
}
