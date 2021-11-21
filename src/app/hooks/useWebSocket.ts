import {useCallback, useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAssets} from '@redux/actions/asset/assetActions';
import {assetState} from '@redux/selectos/assetSelecto';
import {IAsset} from '@shared/assetInterface';
import {palette} from '@shared/theme/palette';

const useWebSocket = (socketUrl: string, retryInterval: number = 1500) => {
  const dispatch = useDispatch();
  const {data: assetsData} = useSelector(assetState);

  const wsRef = useRef<WebSocket>(new WebSocket(socketUrl));

  const initSocket = useCallback(() => {
    wsRef.current.onopen = () => {
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

            //TODO: Agregar flag para validar si es alta o baja
            assetsData?.splice(assetsData?.indexOf(asset), 1, assetClone);
          }
        });

        if (assetsData) {
          dispatch(updateAssets(assetsData));
        }
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

  return {initSocket};
};

export default useWebSocket;
