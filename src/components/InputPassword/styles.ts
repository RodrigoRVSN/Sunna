import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
  isFocused?: boolean;
}

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15.7px;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrast};
  text-align: left;
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.background};
  padding: 0 23px;

  border-top-left-radius: 44px;
  border-bottom-left-radius: 44px;

`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;

  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;

  background-color: ${({ theme }) => theme.colors.contrast};
  align-items: center;
  justify-content: center;

`;

export const InputContent = styled.View<Props>`
  flex-direction: row;
  margin-top: 6px;
  border-radius: 44px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.primaryLight};
    `}
`;
