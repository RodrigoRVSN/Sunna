import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import Background from './src/components/Background';
import { AuthProvider } from './src/contexts/auth';
import { navigationRef } from './src/utils/navigationRef';

const App = () => {
  LogBox.ignoreLogs([
    'Setting a timer',
  ]);
  return (

    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <NavigationContainer ref={navigationRef}>
        <AuthProvider independent>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </Background>
  );
};

export default App;
