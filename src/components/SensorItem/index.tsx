import React from 'react';
import { RoomsProps } from '../../hooks/useDatabase';
import {
  RoomItemContainer,
  RoomItemTitle,
  ButtonsContainer,
  ItemValue,
} from './styles';

export interface ISensorItemProps {
  item: RoomsProps;
}

export function SensorItem({ item }: ISensorItemProps): JSX.Element {
  return (
    <RoomItemContainer>
      <RoomItemTitle>{item.local.toUpperCase()}</RoomItemTitle>
      <ButtonsContainer>
        <ItemValue>{item.value.state}</ItemValue>
      </ButtonsContainer>
    </RoomItemContainer>
  );
}
