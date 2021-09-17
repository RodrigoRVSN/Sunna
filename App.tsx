import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Background from './src/components/Background';
import { AuthProvider } from './src/contexts/auth';

// import {navigationRef} from './src/utils/navigationRef';

const App = (): JSX.Element => {
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <NavigationContainer>
      <AuthProvider>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <Routes />
        </Background>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
