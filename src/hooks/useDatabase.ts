import { useState, useEffect } from 'react';
import { database, dbRealTime } from '../config/firebase';

interface Convenient {
  convenient: 'banheiro' | 'quarto' | 'garagem' | 'cozinha' | 'sala';
}

interface RoomsProps {
  id: 'banheiro' | 'quarto' | 'garagem' | 'cozinha' | 'sala';
  value: {
    state: boolean;
  };
}

type UseDatabaseProps = {
  firebasePost: (
    convenient: 'banheiro' | 'quarto' | 'garagem' | 'cozinha' | 'sala',
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
    convenient: 'banheiro' | 'quarto' | 'garagem' | 'cozinha' | 'sala',
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
    function loadData() {
      const roomRef = dbRealTime.ref();
      roomRef.on('value', room => {
        const databaseValue: RoomsProps = room.val();
        console.log(databaseValue);
        const values = Object.entries(databaseValue).map(([key, value]) => {
          console.log('a', key);
          return {
            id: Object.keys(databaseValue),
            value: {
              local: Object.keys(value),
              state: value.lamp,
            },
          };
        });
        if (isMounted) {
          setRooms(values as unknown as RoomsProps[]);
          setLoadingData(false);
        }
      });
    }
    void loadData();

    return () => {
      isMounted = false;
    };
  });

  return { firebasePost, playing, loadingData, actionState, rooms };
}
