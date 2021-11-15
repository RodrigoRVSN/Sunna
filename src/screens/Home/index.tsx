import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import useAuth from '../../hooks/useAuth';
import { useDatabase } from '../../hooks/useDatabase';

import Button from '../../components/Button';
import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';

import { HomeContainer, Title } from './styles';
import { LoadingAnimated } from '../../components/LoadingAnimated';

export default function Home(): JSX.Element {
  const { backAction } = BackAction();

  const { firebasePost, playing, loadingData, rooms } =
    useDatabase();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [backAction]);

  return (
    <Background>
      <Header title="Início" />
      {loadingData ? (
        <LoadingAnimated />
      ) : (
        <HomeContainer>
          {rooms.map(item => {
            return (
              <Button
                key={item.id}
                onPress={() => firebasePost(item.id, 'lamp', true)}
                disabled={playing === item.id}
                title={item.actuator.value ? 'Apagar luzes' : 'Acender Luzes'}
              />
            )
          })}
        </HomeContainer>
      )}
    </Background>
  );
}
