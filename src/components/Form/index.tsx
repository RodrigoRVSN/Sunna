import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';

import { User } from '../../contexts/auth';
import useAuth from '../../hooks/useAuth';
import { firebase } from '../../config/firebase';

import Input from '../Input';
import Button from '../Button';
import ButtonGoogle from '../ButtonGoogle';
import ErrorMessage from '../ErrorMessage';

import { Container, ImageLogo, Title } from './styles';
import { showMessage } from 'react-native-flash-message';
import InputPassword from '../InputPassword';

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

  async function handleValidatingForm(type: string) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'A senha deve ter no mínimo 6 dígitos.'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido!'),
      });
      await schema.validate({ email, password });

      if (type === 'register') {
        handleRegisterSubmit();
      } else {
        handleLoginSubmit();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        showMessage({
          message: error.message,
          type: 'warning',
        });
      } else {
        showMessage({
          message: 'Erro nas credenciais.',
          type: 'warning',
        });
      }
    }
  }

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setError('');
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <ImageLogo source={require('../../assets/images/sunnaIcon.png')} />

      <Title>{title}</Title>
      <Input
        title="E-MAIL"
        placeholder="nome@mail.com"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <InputPassword
        title="SENHA"
        placeholder="********"
        onChangeText={setPassword}
        value={password}
      />
      <ErrorMessage error={error} />

      <Button
        disabled={!password || !email}
        title={action}
        loading={loading}
        onPress={() => handleValidatingForm(type)}
      />

      <ButtonGoogle
        loading={loading}
        title="Entrar com o Google"
        onPress={() => handleGoogleSignIn()}
      />
    </Container>
  );
}
