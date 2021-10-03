import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import { HomeContainer, ToLogin, styles } from './styles';
import Form from '../../components/Form';

export default function Register(): JSX.Element {
  const navigation = useNavigation<any>();

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
