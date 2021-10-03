import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const HomeContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})``;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 22px;
  margin-right: auto;
`;

export const ToLogin = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
`;

export const ImageLogo = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
`;

export const styles = StyleSheet.create({
  container: { flex: 1 },
});
