import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';

console.log(GOOGLE_ANDROID_CLIENT_ID);
export const config = {
  androidClientId: `${GOOGLE_ANDROID_CLIENT_ID}`,
  iosClientId: `${GOOGLE_IOS_CLIENT_ID}`,
  scopes: ['profile', 'email'],
};
