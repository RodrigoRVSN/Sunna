import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';
import { firebase } from '../../config/firebase';
import useAuth from '../../hooks/useAuth';
import { HomeContainer, Title, ToRegister, styles, ImageLogo } from './styles';
import { Loading } from '../../components/Loading';
import ButtonGoogle from '../../components/ButtonGoogle';
import { Fade } from '../../hooks/animations/fade';
import { User } from '../../contexts/auth';

export default function Login(): JSX.Element {
  const { setUserApp, handleGoogleSignIn, loading, setLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { fadeAnim, fadeIn } = Fade();

  const navigation = useNavigation<any>();

  useEffect(() => {
    setError('');
    fadeIn();
  }, [fadeIn]);

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

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Background>
          {loading ? (
            <Loading />
          ) : (
            <HomeContainer style={{ opacity: fadeAnim }}>
              <ImageLogo
                source={require('../../assets/images/sunnaIcon.png')}
              />

              <Title>ENTRE</Title>
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

              <Button title="ENTRAR" onPress={() => handleLoginSubmit()} />

              <ButtonGoogle
                title="Entrar com o Google"
                onPress={() => handleGoogleSignIn()}
              />

              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <ToRegister>Clique aqui para criar uma conta.</ToRegister>
              </TouchableOpacity>
            </HomeContainer>
          )}
        </Background>
      </KeyboardAvoidingView>
    </>
  );
}
