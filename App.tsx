import React from 'react';
import { LogBox, StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/contexts/auth';
import theme from './src/global/styles/theme';

import FlashMessage from 'react-native-flash-message';

import Routes from './src/routes';

const App = (): JSX.Element => {
  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
        <FlashMessage position="top" style={{ paddingTop: 50 }} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
