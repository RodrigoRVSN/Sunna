import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './styles';
import { theme } from '../../global/styles/theme';

export default function Background({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  );
}
