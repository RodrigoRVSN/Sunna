import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '../../contexts/auth';
import useAuth from '../../hooks/useAuth';
import { firebase } from '../../config/firebase';

import Input from '../Input';
import Button from '../Button';
import ButtonGoogle from '../ButtonGoogle';
import ErrorMessage from '../ErrorMessage';

import { Container, ImageLogo, Title } from './styles';

interface Props {
  title: string;
  type: string;
  action: string;
}

export default function Form({ title, type, action }: Props) {
  const { setUserApp, handleGoogleSignIn, loading, setLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation<any>();

  async function handleLoginSubmit() {
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async userCredential => {
        const { user } = userCredential;
        await AsyncStorage.setItem('@app:user', JSON.stringify(user));
        setUserApp(user as User);
        navigation.navigate('Home');
      })
      .catch(err => {
        setError((err as Error).message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function handleRegisterSubmit() {
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch(err => {
        setError((err as Error).message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setError('');
  }, []);

  return (
    <Container>
      <ImageLogo source={require('../../assets/images/sunnaIcon.png')} />

      <Title>{title}</Title>
      <Input
        title="E-MAIL"
        placeholder="nome@mail.com"
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

      <Button
        title={action}
        loading={loading}
        onPress={
          type === 'register'
            ? () => handleRegisterSubmit()
            : () => handleLoginSubmit()
        }
      />

      <ButtonGoogle
        title="Entrar com o Google"
        onPress={() => handleGoogleSignIn()}
      />
    </Container>
  );
}
