import styled from 'styled-components/native';
import { Animated, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ container: { flex: 1 } });

export const HomeContainer = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
`;
