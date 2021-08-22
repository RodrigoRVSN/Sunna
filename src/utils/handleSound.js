import { Audio } from 'expo-av';

const sound = new Audio.Sound();

export async function handleSound(setPlaying, audioState, setAudioState, audioOn, audioOff) {
  setPlaying(true);
  setAudioState(!audioState);
  try {
    await sound.loadAsync(audioState ? audioOn : audioOff);
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
