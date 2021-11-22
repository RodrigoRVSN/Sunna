import React from 'react';
import { LoadingContainer } from './styles';

import LottieView from 'lottie-react-native';

import loading_animated from '../../assets/animations/loading_animated.json';

export function LoadingAnimated(): JSX.Element {

  return (
    <>
      <LoadingContainer>
        <LottieView
          source={loading_animated}
          autoPlay
          style={{ height: 350 }}
        />
      </LoadingContainer>
    </>
  );
}
