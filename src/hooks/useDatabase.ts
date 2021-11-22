import { useState, Dispatch, SetStateAction, useCallback } from 'react';
import { dbRealTime } from '../config/firebase';
import { useFocusEffect } from '@react-navigation/core';

export interface RoomsProps {
  id: string;
  local: string;
  value: {
    state: boolean;
  };
}

type UseDatabaseProps = {
  firebasePost: (
    convenient: string,
    thing: string,
    isBoolean?: boolean,
  ) => void;
  playing: string;
  loadingData: boolean;
  actionState: boolean;
  rooms: RoomsProps[] | undefined;
  typePage: string;
  setTypePage: Dispatch<SetStateAction<string>>;
};

export function useDatabase(): UseDatabaseProps {
  const [valueSend, setValueSend] = useState(false);
  const [actionState, setActionState] = useState(false);
  const [playing, setPlaying] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [typePage, setTypePage] = useState('luzes');
  const [rooms, setRooms] = useState<RoomsProps[]>();

  // send data to database
  async function firebasePost(
    convenient: string,
    thing: string,
    isBoolean?: boolean,
  ) {
    if (isBoolean) {
      setPlaying(convenient);
      const value = await dbRealTime.ref(`${convenient}/${thing}/state`).get();

      await dbRealTime
        .ref(`${convenient}/${thing}/state`)
        .set(!value.val())
        .then(() => {
          setActionState(valueSend);
          setPlaying('');
        });
    }
  }

  function loadData(isMounted: boolean, typePage: string) {
    const roomRef = dbRealTime.ref(typePage);
    roomRef.on('value', room => {
      const databaseValue: RoomsProps = room.val() as RoomsProps;
      const values = Object.entries(databaseValue).map(([key, value]) => {
        return {
          local: key,
          value: value as boolean,
        };
      });
      if (isMounted) {
        setRooms(values as unknown as RoomsProps[]);
        setLoadingData(false);
      }
    });
  }

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;

      loadData(isMounted, typePage);

      return () => {
        isMounted = false;
      };
    }, [typePage]),
  );

  return {
    firebasePost,
    playing,
    loadingData,
    actionState,
    rooms,
    typePage,
    setTypePage,
  };
}
