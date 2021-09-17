import { Dispatch, SetStateAction } from 'react';
import { Audio, AVPlaybackNativeSource } from 'expo-av';

const sound = new Audio.Sound();

type Props = {
  setPlaying: Dispatch<SetStateAction<boolean>>;
  actionState: boolean;
  setActionState: Dispatch<SetStateAction<boolean>>;
  audioOn: AVPlaybackNativeSource;
  audioOff: AVPlaybackNativeSource;
};

export async function handleSound({
  setPlaying,
  actionState,
  setActionState,
  audioOn,
  audioOff,
}: Props): Promise<() => void> {
  setPlaying(true);
  setActionState(!actionState);
  try {
    await sound.loadAsync(actionState ? audioOn : audioOff);
    await sound.playAsync();
  } catch (error) {
    console.log(error);
  }
  const interval = setTimeout(async () => {
    await sound.unloadAsync();
    setPlaying(false);
  }, 3000);

  return () => clearInterval(interval);
}
