import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from 'react-native';

export const ButtonContainer = styled(RectButton)`
  margin-top: 10px;
  background: ${props => props.theme.colors.primaryLight};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 180px;
  max-width: 250px;
  height: 57px;
  border-radius: 44px;
  padding: 0 10px;
`;

export const Title = styled(Text)`
  font-size: 20px;
  color: ${props => props.theme.colors.white};
`;
