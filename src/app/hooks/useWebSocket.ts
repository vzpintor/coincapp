import {useCallback, useEffect, useRef, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

const useWebSocket = (socketUrl: string, retryInterval: number = 1500) => {
  const [wsData, setWsData] = useState(null);

  const wsRef = useRef<WebSocket>(new WebSocket(socketUrl));

  const initSocket = useCallback(() => {
    wsRef.current.onopen = () => {
      wsRef.current.onmessage = (event: WebSocketMessageEvent) => {
        console.log(JSON.parse(event.data));
        setWsData(JSON.parse(event.data));
      };
    };

    wsRef.current.onclose = e => {
      setTimeout(() => {
        console.log(
          'Socket is closed. Reconnect will be attempted in 1 second.',
          e.reason,
        );
        initSocket();
      }, retryInterval);
    };
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state !== 'active') {
        if (wsRef.current.readyState === 1) {
          wsRef.current.close();
        }
        return;
      }

      if (wsRef.current.readyState === 3) {
        wsRef.current = new WebSocket(socketUrl);
        initSocket();
      }
    });
  }, []);

  return {initSocket, wsData};
};

export default useWebSocket;
