import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { opacity: 1 },
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
