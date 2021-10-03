import React from 'react';
import { LogBox } from 'react-native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

const App = (): JSX.Element => {
  LogBox.ignoreLogs(['Setting a timer']);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
