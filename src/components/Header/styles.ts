import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const HeaderContainer = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding: 0px 24px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TinyLogo = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.primaryLight};
  background-color: ${({theme}) => theme.colors.white};
  color: #e63946;
  font-size: 15px;
`;
export const ImageProfile = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.colors.white};
`;

export const LetterProfile = styled.Text`
  color: ${({theme}) => theme.colors.primaryDark};
  font-size: 25px;
  text-transform: uppercase;
`;
