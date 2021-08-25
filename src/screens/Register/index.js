import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { firebase } from '../../config/firebase';
import ErrorMessage from '../../components/ErrorMessage';
import {
  HomeContainer, Title, ToLogin, styles, ImageLogo,
} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { Loading } from '../../components/Loading';
import ButtonGoogle from '../../components/ButtonGoogle';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { handleGoogleSignIn, loading, setLoading } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    setError('');
  }, []);

  async function handleRegisterSubmit() {
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        {loading ? <Loading />
          : (
            <HomeContainer>
              <ImageLogo
                source={require('../../assets/images/sunnaIcon.png')}
              />
              <Title>
                REGISTRE
              </Title>
              <Input
                title="E-MAIL"
                placeholder="email@gmail.com"
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Input
                title="SENHA"
                placeholder="********"
                secureTextEntry
                onChangeText={setPassword}
              />
              <ErrorMessage error={error} />

              <Button title="REGISTRAR" onPress={() => handleRegisterSubmit()} />

              <ButtonGoogle title="Entrar com o Google" onPress={() => handleGoogleSignIn()} />

              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <ToLogin>Já possui uma conta? Clique aqui.</ToLogin>
              </TouchableOpacity>
            </HomeContainer>
          )}

      </Background>
    </KeyboardAvoidingView>

  );
}
