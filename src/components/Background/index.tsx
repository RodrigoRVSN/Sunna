import React, { ReactNode } from 'react';

import { BackgroundContainer } from './styles';
import { useTheme } from 'styled-components';

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <BackgroundContainer
        colors={[theme.colors.background, theme.colors.primaryDark]}>
        {children}
      </BackgroundContainer>
    </>
  );
}
