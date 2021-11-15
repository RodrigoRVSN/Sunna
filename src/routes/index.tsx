import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import useAuth from '../hooks/useAuth';
import AuthRoutes from './auth.routes';
import { LoadingAnimated } from '../components/LoadingAnimated';
import AppTabRoutes from './app.tab.routes';

export default function Routes(): JSX.Element {
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
      {userApp.email ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
