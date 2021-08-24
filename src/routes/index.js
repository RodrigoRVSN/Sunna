import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import Background from '../components/Background';

export default function Routes() {
  return (
    <Background>

      <NavigationContainer independent>
        <AppRoutes />
      </NavigationContainer>
    </Background>
  );
}
