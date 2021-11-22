import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

import Background from '../../components/Background';
import BackAction from '../../components/BackAction';
import { Header } from '../../components/Header';
import { HomeSelect } from '../../components/HomeSelect';

export default function Home(): JSX.Element {
  const { backAction } = BackAction();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [backAction]);

  return (
    <Background>
      <Header title={'Início'} />
      <HomeSelect iconName="motion-sensor" redirect="Lights" title="Luzes" />
      <HomeSelect iconName="lightbulb" redirect="Sensors" title="Sensores" />
    </Background>
  );
}
