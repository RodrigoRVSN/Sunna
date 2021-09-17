import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonContainer, Title } from './styles';

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
};

export default function Button({
  title,
  disabled,
  onPress,
}: ButtonProps): JSX.Element {
  return (
    <>
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <ButtonContainer>
          <Title>{title}</Title>
        </ButtonContainer>
      </TouchableOpacity>
    </>
  );
}
