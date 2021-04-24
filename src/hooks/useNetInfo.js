import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetInfo = () => {
  const [connState, setConnState] = useState('');

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setConnState(state);
      // console.log('Tipo de conexão', state.type);
      // console.log('Está conectado?', state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnState(state);
      // console.log('Tipo de conexão', state.type);
      // console.log('Está conectado?', state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return connState;
};

export default useNetInfo;
