import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { HomeContainer, Title } from './styles';
import { useAuth } from '../../hooks/useAuth';
import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';
// import { Chart } from '../../components/Chart';
import { schedulePushNotification } from '../../service/schedulePushNotification';
import { sendPushNotification } from '../../service/sendPushNotifaction';
import Button from '../../components/Button';
import { handleSound } from '../../utils/handleSound';
import { Fade } from '../../hooks/animations/fade';

const lightsOff = require('../../assets/audio/lightsOff.mp3');
const lightsOn = require('../../assets/audio/lightsOn.mp3');

export default function Home() {
  const {
    userApp, handleSignOut, expoToken,
  } = useAuth();
  const { backAction } = BackAction();
  const [lightsState, setLightsState] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { fadeAnim, fadeIn } = Fade();

  useEffect(() => {
    fadeIn();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <Background>
      <Header title="Início" />
      <HomeContainer style={{ opacity: fadeAnim }}>
        <Title>{userApp?.email}</Title>
        <Button
          onPress={() => handleSound(setPlaying, lightsState, setLightsState, lightsOn, lightsOff)}
          disabled={playing}
          title={lightsState ? 'Apagar luzes' : 'Acender Luzes'}
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
        <Button
          onPress={() => handleSignOut()}
          title="Sair"
        />

      </HomeContainer>
    </Background>
  );
}
