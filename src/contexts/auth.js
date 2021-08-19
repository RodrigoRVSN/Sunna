import React, {
  useState, createContext, useEffect,
  useRef,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { db, firebase } from '../config/firebase';
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
      await Google.logOutAsync({ accessToken, ...config })
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
  async function handleGoogleSignIn() {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (result) => {
        const { type, user } = result;
        if (type === 'success') {
          await AsyncStorage.setItem('@app:user', JSON.stringify(user));
          setUserApp(user);

          navigation.navigate('Home');
        } else {
          Alert('Login cancelado');
        }
      })
      .catch((error) => {
        Alert(`Falha ao realizar login! ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

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
