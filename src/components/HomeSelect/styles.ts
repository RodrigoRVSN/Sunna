import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const RoomItemTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;

export const RoomItemContainer = styled(RectButton)`
  margin: 20px;
  align-items: center;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 16px;
  padding: 25px;
  flex-direction: row;
`;
