import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import Form from '../../components/Form';
import { HomeContainer, styles, ToRegister } from './styles';

export default function Login(): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Background>
          <HomeContainer>
            <Form title="ENTRE" type="login" action="ENTRAR"/>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <ToRegister>Clique aqui para criar uma conta.</ToRegister>
            </TouchableOpacity>
          </HomeContainer>
        </Background>
      </KeyboardAvoidingView>
    </>
  );
}
