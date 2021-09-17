import React, {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';

import {BackgroundContainer} from './styles';
import {theme} from '../../global/styles/theme';

type Props = {
  children: ReactNode;
};

export default function Background({children}: Props) {
  const {primaryDark, background} = theme.colors;

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer colors={[background, primaryDark]}>
        {children}
      </BackgroundContainer>
    </ThemeProvider>
  );
}
