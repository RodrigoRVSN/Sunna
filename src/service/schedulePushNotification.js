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

/* async function cancelNotifications() {
  Notifications.cancelAllScheduledNotificationsAsync();
}
cancelNotifications(); */

const trigger = new Date(Date.now() + 1000 * 60 * 40);
trigger.setMinutes(0);
trigger.setSeconds(0);

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Se lembre de beber água em! ❤️',
  },
  trigger,
});
