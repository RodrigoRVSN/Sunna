import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled(RectButton)`
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
  width: ${RFValue(120)}px;
  height: ${RFValue(50)}px;
  border-radius: 44px;
  padding: 0 6px;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;
