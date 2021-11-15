import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useCallback } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/images/brand.svg';

import { Container } from './styles';

export function Splash(): JSX.Element {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const finishAnimation = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(finishAnimation)();
    });
  }, [finishAnimation, splashAnimation]);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={250} height={250} />
      </Animated.View>
    </Container>
  );
}
