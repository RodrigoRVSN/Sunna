import React, { ReactNode } from 'react';

import { BackgroundContainer } from './styles';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <BackgroundContainer
        colors={[theme.colors.background, theme.colors.primaryDark]}>
        {children}
      </BackgroundContainer>
    </>
  );
}
