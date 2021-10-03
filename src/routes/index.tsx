import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import { AuthProvider } from '../contexts/auth';

export default function Routes() {
  return (
    <NavigationContainer independent>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
