import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';

import { Splash } from '../screens/Splash';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function AuthRoutes(): JSX.Element {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: { opacity: 1 },
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
