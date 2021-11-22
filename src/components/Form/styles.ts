import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
})`
`;

export const ImageLogo = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.contrast};
  margin-bottom: 22px;
  margin-right: auto;
`;
