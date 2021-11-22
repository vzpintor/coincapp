import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import useWebSocket from '@hooks/useWebSocket';
import {socket} from '@environment/env.dev';
import {StackScreenProps} from '@react-navigation/stack';
import {PrimaryParamList} from '@navigation/PrimaryNavigation';
import {Container} from '@components/Container';
import {format} from '@utils/number';
import PercentageChange from '@components/PercentageChange';
import {useDispatch, useSelector} from 'react-redux';
import {assetHistoryState, findAsset} from '@redux/selectos/assetSelecto';
import {detailScreenStyles} from '@screens/Detail/styles';
import {requestAssetHistory} from '@redux/actions/asset/assetActions';

const DetailScreen = ({
  route,
}: StackScreenProps<PrimaryParamList, 'Detail'>) => {
  const dispatch = useDispatch();

  const {asset} = route.params;
  const {id, logo, name, symbol, changePercent24Hr} = asset;

  const {initSocket, stopSocket} = useWebSocket(`${socket}${id}`);

  const {priceUsd, background} = useSelector(findAsset)(id);
  const {isLoading, data: historyData} = useSelector(assetHistoryState);

  useEffect(() => {
    initSocket();
    return () => {
      stopSocket();
    };
  }, []);

  useEffect(() => {
    dispatch(requestAssetHistory('d1', id));
  }, []);

  return (
    <Container preset={'scroll'} unsafe style={detailScreenStyles.container}>
      <View style={detailScreenStyles.brandContainer}>
        <Image
          source={{
            uri: logo,
            width: 100,
            height: 100,
          }}
        />
        <View style={detailScreenStyles.brandNameContainer}>
          <Text style={detailScreenStyles.brandName}>
            {name} ({symbol})
          </Text>
        </View>
      </View>
      <View
        style={[
          detailScreenStyles.changeContainer,
          {backgroundColor: background || 'white'},
        ]}>
        <Text>${format(priceUsd)}</Text>
        <View style={detailScreenStyles.percentage}>
          <PercentageChange changePercent={changePercent24Hr} />
        </View>
      </View>

      <View style={{flexGrow: 1, backgroundColor: 'purple'}}>
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Text>Se mostrara grafica</Text>
        )}
      </View>
    </Container>
  );
};

export default DetailScreen;
