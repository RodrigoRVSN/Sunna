import { useRef } from 'react';
import { Animated } from 'react-native';

export function Fade() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  function fadeIn() {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }

  return {
    fadeAnim, fadeIn, fadeOut,
  };
}
