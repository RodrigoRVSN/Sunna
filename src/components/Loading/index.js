import React from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../global/styles/theme';
import { LoadingContainer } from './styles';

export function Loading() {
  return (
    <>
      <LoadingContainer>
        <ActivityIndicator size="large" color={theme.colors.primaryLight} />
      </LoadingContainer>
    </>
  );
}
