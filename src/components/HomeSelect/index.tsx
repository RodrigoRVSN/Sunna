import React from 'react';
import { RoomItemContainer, RoomItemTitle } from './styles';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../routes/app.routes';

export interface IRoomItemProps {
  redirect: keyof RootTabParamList;
  title: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

type homeScreenProp = StackNavigationProp<RootTabParamList, 'Home'>;

export function HomeSelect({
  redirect,
  title,
  iconName,
}: IRoomItemProps): JSX.Element {
  const navigation = useNavigation<homeScreenProp>();
  const { colors } = useTheme();

  return (
    <RoomItemContainer onPress={() => navigation.navigate(redirect)}>
      <MaterialCommunityIcons
        size={24}
        name={iconName}
        color={colors.contrast}
      />
      <RoomItemTitle>{title.toUpperCase()}</RoomItemTitle>
    </RoomItemContainer>
  );
}
