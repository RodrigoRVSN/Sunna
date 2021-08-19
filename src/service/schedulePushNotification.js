import * as Notifications from 'expo-notifications';

/* Local */

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Oi! Tá passada? 📬',
      body: 'E-mail do Rodrigo lindo de upx',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}
