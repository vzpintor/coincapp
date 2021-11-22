import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useWebSocket from '@hooks/useWebSocket';
import {socket} from '@environment/env.dev';
import {useDispatch} from 'react-redux';

const DetailScreen = () => {
  const {initSocket, stopSocket} = useWebSocket(`${socket}bitcoin`);

  useEffect(() => {
    console.log('======> start single ws');
    initSocket();
    return () => {
      console.log('======> stop single ws');
      stopSocket();
    };
  }, []);

  return (
    <View>
      <Text>Detail screen</Text>
    </View>
  );
};

export default DetailScreen;
