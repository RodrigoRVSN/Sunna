import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const HomeContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const ToRegister = styled.Text`
  color: ${({ theme }) => theme.colors.contrast};
  margin-top: 15px;
  font-size: ${RFValue(14)}px;
`;

export const styles = StyleSheet.create({
  container: { flex: 1 },
});
