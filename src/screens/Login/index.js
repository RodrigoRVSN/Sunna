import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {

  KeyboardAvoidingView, Platform, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';
import { firebase } from '../../config/firebase';
import { useAuth } from '../../hooks/useAuth';
import {
  HomeContainer, Title, ToRegister, styles,
} from './styles';
import { Loading } from '../../components/Loading';

export default function Login() {
  const {
    setUserApp, handleGoogleSignIn, loading, setLoading,
  } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  useEffect(() => { setError(''); }, []);

  async function handleLoginSubmit() {
    setLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        await AsyncStorage.setItem('@app:user', JSON.stringify(user));
        setUserApp(user);

        navigation.navigate('Home');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Background>
          {loading ? <Loading />
            : (

              <HomeContainer>

                <Title>Entre em sua conta!</Title>
                <Input
                  placeholder="email@gmail.com"
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <Input
                  placeholder="********"
                  secureTextEntry
                  onChangeText={setPassword}
                />
                <ErrorMessage error={error} />

                <Button
                  title="Entrar"
                  onPress={() => handleLoginSubmit()}
                />

                <Button
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
