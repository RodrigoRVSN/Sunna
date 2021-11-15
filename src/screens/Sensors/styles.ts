import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({ container: { flex: 1 } });

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.contrast};
  font-size: ${RFValue(12)}px;
`;
