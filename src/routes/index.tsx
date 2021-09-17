import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';

export default function Routes() {
  return (
    <NavigationContainer independent>
      <AppRoutes />
    </NavigationContainer>
  );
}
