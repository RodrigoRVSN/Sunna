import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import useAuth from '../hooks/useAuth';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  const { userApp } = useAuth();

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
      {userApp?.email ? (
        <Screen name="Home" component={Home} />
      ) : (
        <>
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
          <Screen name="Splash" component={Splash} />
        </>
      )}
    </Navigator>
  );
}
