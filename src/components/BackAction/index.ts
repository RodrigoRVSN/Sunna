import { Alert } from 'react-native';
import useAuth from '../../hooks/useAuth';

type Props = {
  backAction: () => boolean;
};

export default function BackAction(): Props {
  const { handleSignOut } = useAuth();

  const backAction = () => {
    Alert.alert(
      'Poxa, achei que você me amava :(',
      'Deseja sair da sua conta?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'SIM',
          onPress: () => handleSignOut(),
        },
      ],
    );
    return true;
  };

  return { backAction };
}
