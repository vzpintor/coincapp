import React, {useCallback, useEffect} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestAssets} from '@redux/actions/asset/assetActions';
import {Container} from '@components/Container';
import Row from '@components/Row';
import Divider from '@components/Divider';
import {assetState} from '@redux/selectos/assetSelecto';
import {IAsset} from '@shared/assetInterface';
import Loading from '@components/Loading';
import Search from '@components/Search';
import {homeScreenStyles} from '@screens/Home/styles';
import useWebSocket from '@hooks/useWebSocket';

const {socket} = require('@environment/env');

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {data, isLoading} = useSelector(assetState);

  const {initSocket, wsData} = useWebSocket(socket);

  useEffect(() => {
    console.log('===> useEffect para initSocket');
    console.log('===> wsData', wsData);
    // initSocket();
  }, []);

  useEffect(() => {
    dispatch(requestAssets());
  }, []);

  // useEffect(() => {
  //   if (data && data?.length > 0) {
  //     initSocket();
  //   }
  // }, [data]);

  const renderRow = useCallback(({item}: ListRenderItemInfo<IAsset>) => {
    return <Row asset={item} />;
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container unsafe>
      <View style={homeScreenStyles.searchContainer}>
        <Search />
      </View>

      {data && data.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={homeScreenStyles.searchContainer}
          ItemSeparatorComponent={() => <Divider />}
          data={data}
          renderItem={renderRow}
          keyExtractor={asset => asset.id}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
