import React, { useCallback } from 'react';
import { BackHandler, FlatList } from 'react-native';

import { useDatabase } from '../../hooks/useDatabase';

import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';

import { HomeContainer } from './styles';
import { LoadingAnimated } from '../../components/LoadingAnimated';
import { RoomItem } from '../../components/RoomItem';
import { useFocusEffect } from '@react-navigation/core';

export default function Lights(): JSX.Element {
  const { backAction } = BackAction();

  const { loadingData, rooms, setTypePage, typePage } = useDatabase();

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      if (isMounted) {
        setTypePage('luzes');
      }
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
        isMounted = false;
      };
    }, [backAction, setTypePage]),
  );

  return (
    <Background>
      <Header title={typePage} />
      {loadingData ? (
        <LoadingAnimated />
      ) : (
        <HomeContainer>
          <FlatList
            data={rooms}
            keyExtractor={item => item.local}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <RoomItem key={item.id} item={item} page={typePage} />
            )}
          />
        </HomeContainer>
      )}
    </Background>
  );
}
