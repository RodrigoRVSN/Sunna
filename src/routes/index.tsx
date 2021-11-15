import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import useAuth from '../hooks/useAuth';
import AuthRoutes from './auth.routes';
import { LoadingAnimated } from '../components/LoadingAnimated';

export default function Routes() {
  const { userApp, loading } = useAuth();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#0D1321',
    },
  };

  return loading ? (
    <LoadingAnimated />
  ) : (
    <NavigationContainer independent theme={theme}>
      {userApp.email ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
