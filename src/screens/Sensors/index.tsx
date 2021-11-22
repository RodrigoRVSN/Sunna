import React, { useCallback } from 'react';
import { BackHandler, FlatList } from 'react-native';

import { useDatabase } from '../../hooks/useDatabase';

import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';

import { HomeContainer } from './styles';
import { LoadingAnimated } from '../../components/LoadingAnimated';
import { SensorItem } from '../../components/SensorItem';
import { useFocusEffect } from '@react-navigation/core';

export default function Sensors(): JSX.Element {
  const { backAction } = BackAction();

  const { loadingData, rooms, typePage, setTypePage } = useDatabase();

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      if (isMounted) {
        setTypePage('sensores');
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
            renderItem={({ item }) => <SensorItem key={item.id} item={item} />}
          />
        </HomeContainer>
      )}
    </Background>
  );
}
