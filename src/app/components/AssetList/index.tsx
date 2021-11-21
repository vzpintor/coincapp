import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {homeScreenStyles} from '@screens/Home/styles';
import Divider from '@components/Divider';
import {AssetListProps} from '@components/AssetList/props';
import {IAsset} from '@shared/assetInterface';
import Row from '@components/Row';
import {useSelector} from 'react-redux';
import {statusState} from '@redux/selectos/assetSelecto';
import useWebSocket from '@hooks/useWebSocket';
import {socket} from '@environment/env';

const AssetList = ({assets}: AssetListProps) => {
  const assetsId = assets.map(asset => asset.id);
  const params = assetsId.join(',');

  const readyState = useSelector(statusState);

  const {initSocket} = useWebSocket(`${socket}${params}`);
  // const {initSocket} = useWebSocket(`${socket}bitcoin`);

  const renderRow = ({item}: ListRenderItemInfo<IAsset>) => {
    return <Row asset={item} />;
  };

  useEffect(() => {
    if (readyState) {
      initSocket();
    }
  }, [readyState]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={homeScreenStyles.searchContainer}
      ItemSeparatorComponent={() => <Divider />}
      data={assets}
      renderItem={renderRow}
      keyExtractor={asset => asset.id}
    />
  );
};

export default AssetList;
