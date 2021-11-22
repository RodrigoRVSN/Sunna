import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const RoomItemTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;

export const ItemValue = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.contrast};
`;

export const RoomItemContainer = styled.View`
  margin: 20px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 16px;
  padding: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: ${windowWidth * 0.75}px;
  margin-top: 10px;
`;
