import React, {
  useState, createContext, useEffect,
  useRef,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as GoogleAuthentication from 'expo-google-app-auth';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { db } from '../config/firebase';
import { config } from '../config/google';
import { registerForPushNotificationsAsync } from '../service/registerForPushNotificationsAsync';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userApp, setUserApp] = useState({});

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [expoToken, setExpoToken] = useState();

  /* Carrega informações do usuário salvas */
  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem('@app:user');
    if (storage) {
      const userLogged = JSON.parse(storage);
      setUserApp(userLogged);
    }
  }

  /* Chama a função de carregar as informações */
  useEffect(() => {
    loadUserStorageData();
  }, []);

  /* Notificações */
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  /* Gera o token */
  useEffect(() => {
    if (userApp) {
      registerForPushNotificationsAsync(userApp).then((token) => setExpoToken(token));
      notificationListener.current = Notifications.addNotificationReceivedListener((notif) => {
        setNotification(notif);
      });

      responseListener.current = Notifications
        .addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
    } return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [userApp]);

  /* Sair da conta */
  async function handleSignOut() {
    setLoading(true);
    const { accessToken } = userApp;

    if (accessToken) {
      await GoogleAuthentication.logOutAsync({ accessToken, ...config })
        .then(async () => {
          setUserApp({});
          await AsyncStorage.removeItem('@app:user');
        })
        .catch((error) => Alert(`Falha ao sair da conta do google: ${error}`))
        .finally(() => {
          setLoading(false);
        });
    }

    firebase
      .auth()
      .signOut()
      .then(async () => {
        setUserApp({});
        await AsyncStorage.removeItem('@app:user');
      })
      .catch((error) => Alert(`Falha ao sair da conta do firebase: ${error}`))
      .finally(() => {
        setLoading(false);
      });

    await db.collection('usersToken').doc(`${userApp.email}`).delete({
      email: userApp.email,
      expoToken,
    });
  }

  /* Logar com o google */
  const handleGoogleSignIn = () => {
    setLoading(true);
    GoogleAuthentication.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === 'success') {
          const { idToken, accessToken, user } = logInResult;
          const credential = firebase.auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
          await AsyncStorage.setItem('@app:user', JSON.stringify(user));
          setUserApp(user);

          await db.collection('usersToken').doc(`${userApp.email}`).set({
            email: userApp.email,
            expoToken,
          });

          firebase.auth().signInWithCredential(credential);
          navigation.navigate('Home');
        }
      })
      .catch((error) => {
        console.log(`Falha ao realizar login! ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{
      userApp,
      setUserApp,
      handleSignOut,
      handleGoogleSignIn,
      loading,
      setLoading,
      expoToken,
      setExpoToken,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
