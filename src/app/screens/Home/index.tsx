import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {requestAssets} from '@redux/actions/asset/assetActions';
import {Container} from '@components/Container';
import Row from '@components/Row';
import Divider from '@components/Divider';
import {assetState, statusState} from '@redux/selectos/assetSelecto';
import {IAsset} from '@shared/assetInterface';
import Loading from '@components/Loading';
import Search from '@components/Search';
import {homeScreenStyles} from '@screens/Home/styles';
import useWebSocket from '@hooks/useWebSocket';

const {socket} = require('@environment/env');

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {data, isLoading} = useSelector(assetState);
  const readyState = useSelector(statusState);

  const {initSocket, wsData} = useWebSocket(socket);

  useEffect(() => {
    if (readyState) {
      initSocket();
    }
  }, [readyState]);

  useEffect(() => {
    console.log('===> ', wsData);
  }, [wsData]);

  useEffect(() => {
    dispatch(requestAssets());
  }, []);

  const renderRow = ({item}: ListRenderItemInfo<IAsset>) => {
    return <Row asset={item} />;
  };

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
