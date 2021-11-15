import React from 'react';
import { RoomsProps } from '../../hooks/useDatabase';
import ButtonAction from '../ButtonAction';
import { RoomItemContainer, RoomItemTitle, ButtonsContainer } from './styles';
import { useDatabase } from '../../hooks/useDatabase';

export interface IRoomItemProps {
  item: RoomsProps;
  page: string;
}

export function RoomItem({ item, page }: IRoomItemProps): JSX.Element {
  const { firebasePost } = useDatabase();

  return (
    <RoomItemContainer>
      <RoomItemTitle>{item.local.toUpperCase()}</RoomItemTitle>
      <ButtonsContainer>
        <ButtonAction
          onPress={() => firebasePost(page, item.local, true)}
          disabled={!item.value.state}
          title="Desligar"
        />
        <ButtonAction
          onPress={() => firebasePost(page, item.local, true)}
          disabled={item.value.state}
          title="Ligar"
        />
      </ButtonsContainer>
    </RoomItemContainer>
  );
}
