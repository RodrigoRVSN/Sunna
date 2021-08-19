import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';

export const InputContainer = styled(TextInput)`
  width: 350px;
  height: 60px;
  border-radius: 8px;
  font-size: 13px;
  margin-top: 15px;
  text-align: center;
  border-width: 1px;
  background: ${(props) => props.theme.colors.secondary30};
  color: ${(props) => props.theme.colors.secondary100};
  border-color: ${(props) => props.theme.colors.secondary30};
`;
