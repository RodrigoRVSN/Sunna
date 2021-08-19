import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const InputContainer = styled(TextInput)`
  width: ${windowWidth * 0.8}px;
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
