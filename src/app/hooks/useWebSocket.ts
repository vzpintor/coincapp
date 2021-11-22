import {useCallback, useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAssets} from '@redux/actions/asset/assetActions';
import {assetState} from '@redux/selectos/assetSelecto';
import {IAsset} from '@shared/assetInterface';
import {palette} from '@shared/theme/palette';

const useWebSocket = (socketUrl: string) => {
  const dispatch = useDispatch();
  const {data: assetsData} = useSelector(assetState);

  const wsRef = useRef<WebSocket>();

  const initSocket = useCallback(() => {
    wsRef.current = new WebSocket(socketUrl);

    wsRef.current.onopen = () => {
      if (wsRef.current) {
        wsRef.current.onmessage = (event: WebSocketMessageEvent) => {
          const prices = JSON.parse(event.data);
          assetsData?.forEach((asset: IAsset) => {
            const price = prices[asset.id];
            if (price) {
              const background =
                price > asset.priceUsd ? palette.hoverGreen : palette.hoverRed;

              const assetClone = {
                ...asset,
                priceUsd: price,
                background,
              };

              assetsData?.splice(assetsData?.indexOf(asset), 1, assetClone);
            }
          });

          if (assetsData) {
            dispatch(updateAssets(assetsData));
          }
        };
      }
    };
  }, []);

  const stopSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.close();
    }
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state !== 'active') {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          stopSocket();
        }
        return;
      }

      initSocket();
    });
  }, []);

  return {
    initSocket,
    stopSocket,
  };
};

export default useWebSocket;
