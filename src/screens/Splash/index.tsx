import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import BrandSvg from '../../assets/images/brand.svg';
import { RootStackParamList } from '../../routes/auth.routes';

import { Container } from './styles';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

export function Splash(): JSX.Element {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation<homeScreenProp>();

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

  function finishAnimation() {
    navigation.navigate('Login');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(finishAnimation)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={250} height={250} />
      </Animated.View>
    </Container>
  );
}
