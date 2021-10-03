import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15.7px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const InputText = styled(TextInput).attrs(props => ({
  placeholderTextColor: props.theme.colors.background,
}))`
  width: ${windowWidth * 0.75}px;
  height: 60px;
  border-radius: 44px;
  font-size: 14px;
  margin-top: 6px;
  text-align: center;
  border-width: 1px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-color: ${({ theme }) => theme.colors.primaryMedium};
`;
