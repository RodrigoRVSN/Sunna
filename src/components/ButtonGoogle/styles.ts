import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primaryLight};
  margin-top: 32px;
  
  height: ${RFValue(57)}px;
  width: 100%;
  border-radius: 44px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;
