import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { Animated } from 'react-native';
import { BackgroundContainer } from './styles';
import { theme } from '../../global/styles/theme';

export default function Background({ children }) {
  const { primaryDark, background } = theme.colors;

  /* const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    fadeOut();
    setTimeout(() => {
      fadeIn();
    }, 2000);
  }, []); */

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
