import { useState, useEffect } from 'react';
import { dbRealTime } from '../config/firebase';

interface Convenient {
  convenient: 'bathRoom' | 'coupleRoom' | 'garage' | 'kitchen' | 'livingRoom';
}

interface RoomsProps {
  id: 'bathRoom' | 'coupleRoom' | 'garage' | 'kitchen' | 'livingRoom';
  value: unknown;
}

type UseDatabaseProps = {
  firebasePost: (
    convenient: 'bathRoom' | 'coupleRoom' | 'garage' | 'kitchen' | 'livingRoom',
    thing: string,
    isBoolean?: boolean,
  ) => void;
  playing: string;
  loadingData: boolean;
  actionState: boolean;
  rooms: RoomsProps[] | undefined;
};

export function useDatabase(): UseDatabaseProps {
  const [valueSend, setValueSend] = useState(false);
  const [actionState, setActionState] = useState(false);
  const [playing, setPlaying] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [rooms, setRooms] = useState<RoomsProps[]>();

  // send data to database
  async function firebasePost(
    convenient: 'bathRoom' | 'coupleRoom' | 'garage' | 'kitchen' | 'livingRoom',
    thing: string,
    isBoolean?: boolean,
  ) {
    if (isBoolean) {
      setPlaying(convenient);
      const value = await dbRealTime.ref(`${convenient}/${thing}`).get();

      await dbRealTime
        .ref(`${convenient}/${thing}`)
        .set(!value.val())
        .then(() => {
          setActionState(valueSend);
          setPlaying('');
        });
    }
  }

  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      const roomRef = dbRealTime.ref();

      roomRef.on('value', room => {
        const databaseValue: RoomsProps = room.val();

        const values = Object.entries(databaseValue).map(([key, value]) => {
          return {
            id: key,
            value: value.lamp,
          };
        });
        if (isMounted) {
          setRooms(values as unknown as RoomsProps[]);
          setLoadingData(false);
        }
      });
    }
    loadData();

    return () => {
      isMounted = false;
    };
  }, [playing]);

  return { firebasePost, playing, loadingData, actionState, rooms };
}
