import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import useAuth from '../../hooks/useAuth';
import { useDatabase } from '../../hooks/useDatabase';

// import { Chart } from '../../components/Chart';
import { schedulePushNotification } from '../../service/schedulePushNotification';
import { sendPushNotification } from '../../service/sendPushNotifaction';

import Button from '../../components/Button';
import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';

import { HomeContainer, Title } from './styles';
import { LoadingAnimated } from '../../components/LoadingAnimated';

export default function Home(): JSX.Element {
  const { userApp, handleSignOut, expoToken } = useAuth();
  const { backAction } = BackAction();

  const { firebasePost, playing, loadingData, actionState, rooms } =
    useDatabase();

  useEffect(() => {
    let isMounted = true;
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      isMounted = false;
    };
  }, [backAction]);

  return (
    <Background>
      <Header title="Início" />
      {loadingData ? (
        <LoadingAnimated />
      ) : (
        <HomeContainer>
          <Title>{userApp?.email}</Title>

          {rooms?.map(item => (
            <Button
              key={item.id}
              onPress={() => firebasePost(item.id, 'lamp', true)}
              disabled={playing === item.id}
              title={item.value ? 'Apagar luzes' : 'Acender Luzes'}
            />
          ))}

          <Button
            title="local notif."
            onPress={async () => {
              await schedulePushNotification();
            }}
          />
          <Button
            title="remote notif."
            onPress={async () => {
              await sendPushNotification(expoToken);
            }}
          />
          <Button onPress={() => handleSignOut()} title="Sair" />
        </HomeContainer>
      )}
    </Background>
  );
}
