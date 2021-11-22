import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import { HomeContainer, ToLogin, styles } from './styles';
import Form from '../../components/Form';
import { RootStackParamList } from '../../routes/app.routes';

export default function Register(): JSX.Element {
  const navigation = useNavigation<RootStackParamList>();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Background>
        <HomeContainer>
          <Form title="REGISTRE" type="register" action="REGISTRAR" />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <ToLogin>Já possui uma conta? Clique aqui.</ToLogin>
          </TouchableOpacity>
        </HomeContainer>
      </Background>
    </KeyboardAvoidingView>
  );
}
