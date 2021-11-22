import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled(RectButton)`
  margin-top: 10px;
  background: ${({theme}) => theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: ${RFValue(180)}px;
  max-width: ${RFValue(200)}px;
  height: ${RFValue(57)}px;
  border-radius: 44px;
  padding: 0 10px;
  
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.contrast};
`;
