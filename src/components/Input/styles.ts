import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  isFocused?: boolean;
}

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15.7px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrast};
  text-align: left;
`;

export const InputText = styled(TextInput)<Props>`
  width: ${windowWidth * 0.75}px;
  height: 60px;
  border-radius: 44px;

  margin-top: 6px;
  padding: 0 23px;

  font-size: 14px;
  background: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-color: ${({ theme }) => theme.colors.primaryMedium};
  border-width: 1px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.primaryLight};
    `}
`;
