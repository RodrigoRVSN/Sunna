import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
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
    <LinearGradient
      style={styles.container}
      colors={[primaryDark, background]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={white} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.tinyLogo}>
        {userApp?.photoUrl
          ? (<Image style={styles.imageProfile} source={{ uri: userApp?.photoUrl }} />)
          : (<Text style={styles.letterProfile}>{userApp?.email?.slice(0, 1)}</Text>)}
      </TouchableOpacity>

    </LinearGradient>
  );
}
