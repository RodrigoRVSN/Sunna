import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import { AuthProvider } from '../contexts/auth';
import { View } from 'react-native';

export default function Routes() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#0D1321',
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent theme={theme}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}
