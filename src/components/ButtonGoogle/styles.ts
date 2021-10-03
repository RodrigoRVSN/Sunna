import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled(RectButton)`
  margin-top: 32px;
  background: ${({ theme }) => theme.colors.primaryLight};
  padding: 0 ${RFValue(20)}px;
  height: ${RFValue(57)}px;
  width: 100%;
  min-width: ${RFValue(200)}px;
  max-width: ${RFValue(220)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 44px;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;
