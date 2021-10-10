import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { LoadingContainer } from './styles';

export function Loading(): JSX.Element {
  const theme = useTheme();

  return (
    <>
      <LoadingContainer>
        <ActivityIndicator size="large" color={theme.colors.contrast} />
      </LoadingContainer>
    </>
  );
}
