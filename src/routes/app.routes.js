import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { useAuth } from '../hooks/useAuth';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  const { userApp } = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        gestureEnabled: true,
        gestureDirection: 'vertical',
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      {userApp?.email ? (
        <Screen name="Home" component={Home} />
      ) : (
        <>
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
        </>
      )}
    </Navigator>
  );
}
