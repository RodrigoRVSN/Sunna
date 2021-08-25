import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  HeaderContainer, ImageProfile, LetterProfile, TinyLogo, Title,
} from './styles';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/useAuth';

export function Header({ title }) {
  const { primaryDark, background, white } = theme.colors;
  const { userApp } = useAuth();

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HeaderContainer
      colors={[primaryDark, background]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={white} />
      </BorderlessButton>
      <Title>{title}</Title>
      <TinyLogo>
        {userApp?.photoUrl
          ? (<ImageProfile source={{ uri: userApp?.photoUrl }} />)
          : (<LetterProfile>{userApp?.email?.slice(0, 1)}</LetterProfile>)}
      </TinyLogo>

    </HeaderContainer>
  );
}
