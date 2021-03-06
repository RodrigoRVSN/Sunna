/* eslint-disable consistent-return */
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { database } from '../config/firebase';
import { User } from '../contexts/auth';

export async function registerForPushNotificationsAsync(
  userApp: User,
): Promise<string | undefined> {
  let token;
  if (Constants.isDevice) {
    /* Pedir permissões */
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;

    if (userApp.email) {
      await database.collection('usersToken').doc(`${userApp.email}`).set({
        email: userApp.email,
        token,
      });
    }

    return token;
  }
  alert('Must use physical device for Push Notifications');

  if (Platform.OS === 'android') {
    void Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
