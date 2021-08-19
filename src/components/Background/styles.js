import { View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background: ${(props) => props.theme.colors.secondary40};
`;
