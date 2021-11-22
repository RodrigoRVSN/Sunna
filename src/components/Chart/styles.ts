import { View } from 'react-native';

import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export const ChartContainer = styled(View)`
  height: 350px;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
  margin: 20px;
  border-radius: 20px;
`;

export const ScrollViewContainer = styled(ScrollView)`
  padding: 0 20px;
`;
