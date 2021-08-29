import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BackgroundContainer } from './styles';
import { theme } from '../../global/styles/theme';

export default function Background({ children }) {
  const { primaryDark, background } = theme.colors;

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer
        colors={[background, primaryDark]}
      >
        {children}
      </BackgroundContainer>
    </ThemeProvider>
  );
}
