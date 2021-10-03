import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Loading } from '../Loading';
import { ButtonContainer, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  title,
  disabled = false,
  onPress,
  loading = false,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <>
      <ButtonContainer enabled={!disabled || loading} onPress={onPress} {...rest}>
        <Title>{loading ? <Loading /> : title}</Title>
      </ButtonContainer>
    </>
  );
}
