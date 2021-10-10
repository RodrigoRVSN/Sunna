import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const HomeContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const ToRegister = styled.Text`
  color: ${({ theme }) => theme.colors.contrast};
  margin-top: 15px;
`;

export const styles = StyleSheet.create({
  container: { flex: 1 },
});
