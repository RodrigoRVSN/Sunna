import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import useAuth from '../../hooks/useAuth';
import { RootStackParamList } from '../../routes/auth.routes';
import {
  HeaderContainer,
  ImageProfile,
  LetterProfile,
  TinyLogo,
  Title,
} from './styles';

type Props = {
  title: string;
};

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export function Header({ title }: Props): JSX.Element {
  const theme = useTheme();
  const { userApp, handleSignOut } = useAuth();

  const navigation = useNavigation<homeScreenProp>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HeaderContainer
      colors={[theme.colors.primaryDark, theme.colors.background]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={theme.colors.contrast} />
      </BorderlessButton>
      <Title>{title.charAt(0).toUpperCase() + title.substr(1)}</Title>
      <TinyLogo onPress={() => handleSignOut()}>
        {userApp?.photoUrl ? (
          <ImageProfile source={{ uri: userApp?.photoUrl }} />
        ) : (
          <LetterProfile>{userApp?.email?.slice(0, 1)}</LetterProfile>
        )}
      </TinyLogo>
    </HeaderContainer>
  );
}
