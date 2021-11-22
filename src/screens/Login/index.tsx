import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import Form from '../../components/Form';
import { RootStackParamList } from '../../routes/auth.routes';
import { HomeContainer, styles, ToRegister } from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login(): JSX.Element {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Background>
          <HomeContainer>
            <Form title="ENTRE" type="login" action="ENTRAR" />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <ToRegister>Clique aqui para criar uma conta.</ToRegister>
            </TouchableOpacity>
          </HomeContainer>
        </Background>
      </KeyboardAvoidingView>
    </>
  );
}
