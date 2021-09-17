import styled from 'styled-components';
import { Animated, Image, StyleSheet, Text } from 'react-native';

export const HomeContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 57px;
`;

export const Title = styled(Text)`
  font-size: 30px;
  color: ${props => props.theme.colors.white};
  margin-bottom: 42px;
  margin-right: auto;
`;

export const ToRegister = styled(Text)`
  color: ${props => props.theme.colors.white};
  margin-top: 15px;
`;

export const ImageLogo = styled(Image)`
  width: 160px;
  height: 160px;
`;

export const styles = StyleSheet.create({
  container: { flex: 1 },
});
