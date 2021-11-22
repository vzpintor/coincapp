import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import Divider from '@components/Divider';
import {AssetListProps} from '@components/AssetList/props';
import {IAsset} from '@shared/assetInterface';
import Row from '@components/Row';
import {useSelector} from 'react-redux';
import {statusState} from '@redux/selectos/assetSelecto';
import useWebSocket from '@hooks/useWebSocket';
import {socket} from '@environment/env';
import {assetListStyles} from '@components/AssetList/styles';
import {useFocusEffect} from '@react-navigation/native';

const AssetList = ({assets}: AssetListProps) => {
  const assetsId = assets.map(asset => asset.id);
  const params = assetsId.join(',');

  const readyState = useSelector(statusState);

  const {initSocket, stopSocket} = useWebSocket(`${socket}${params}`);

  const renderRow = ({item}: ListRenderItemInfo<IAsset>) => {
    return <Row asset={item} />;
  };

  useFocusEffect(
    useCallback(() => {
      if (readyState) {
        initSocket();
      }

      return () => stopSocket();
    }, [readyState]),
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={assetListStyles.rowContainer}
      ItemSeparatorComponent={() => <Divider />}
      data={assets}
      renderItem={renderRow}
      keyExtractor={asset => asset.id}
    />
  );
};

export default AssetList;
