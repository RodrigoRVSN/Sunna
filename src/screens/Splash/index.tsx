import { useFocusEffect, useNavigation } from '@react-navigation/core';
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
import useAuth from '../../hooks/useAuth';

import { Container } from './styles';

export function Splash() {
  const splashAnimation = useSharedValue(0);
  const { loadUserStorageData, userApp } = useAuth();
  const navigation = useNavigation<any>();

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
    loadUserStorageData();
    
    if (userApp?.email) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }

  useEffect(()=>{
    loadUserStorageData();
  },[userApp])

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(finishAnimation)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={200} height={200} />
      </Animated.View>
    </Container>
  );
}
