import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { HomeContainer, Title } from './styles';
import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';
// import { Chart } from '../../components/Chart';
import useAuth from '../../hooks/useAuth';
import { schedulePushNotification } from '../../service/schedulePushNotification';
import { sendPushNotification } from '../../service/sendPushNotifaction';
import Button from '../../components/Button';
import { handleSound } from '../../utils/handleSound';

import audioOff from '../../assets/audio/lightsOff.mp3';
import audioOn from '../../assets/audio/lightsOn.mp3';

export default function Home(): JSX.Element {
  const { userApp, handleSignOut, expoToken } = useAuth();
  const { backAction } = BackAction();
  const [actionState, setActionState] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
      isMounted = false;
    };
  }, [backAction]);

  function callHandleSound() {
    void handleSound({
      setPlaying,
      actionState,
      setActionState,
      audioOn,
      audioOff,
    });
  }

  return (
    <Background>
      <Header title="Início" />
      <HomeContainer >
        <Title>{userApp?.email}</Title>
        <Button
          onPress={callHandleSound}
          disabled={playing}
          title={actionState ? 'Apagar luzes' : 'Acender Luzes'}
        />
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
    </Background>
  );
}
