import React from 'react';
import { Image } from 'react-native';
import { ButtonContainer, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Loading } from '../Loading';

interface ButtonGoogleProps extends RectButtonProps {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export default function ButtonGoogle({
  title,
  disabled = false,
  loading = false,
  onPress,
}: ButtonGoogleProps): JSX.Element {
  return (
    <>
      <ButtonContainer enabled={!loading && !disabled} onPress={onPress}>
        <Image source={require('../../assets/images/googleIcon.png')} />
        <Title>{loading ? <Loading /> : title}</Title>
      </ButtonContainer>
    </>
  );
}
