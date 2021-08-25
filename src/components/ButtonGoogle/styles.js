import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  margin-top: 32px;
  background: ${(props) => props.theme.colors.primaryLight};
  width: 320px;
  height: 57px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 44px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
`;
