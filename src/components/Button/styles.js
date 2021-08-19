import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ButtonContainer = styled(RectButton)`
  margin-top: 50px;
  background: ${(props) => props.theme.colors.secondary30};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 250px;
  max-width: 400px;
  height: 60px;
  border-radius: 15px;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${(props) => props.theme.colors.heading};
`;
