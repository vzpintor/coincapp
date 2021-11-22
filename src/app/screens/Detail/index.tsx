import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import useWebSocket from '@hooks/useWebSocket';
import {socket} from '@environment/env.dev';
import {StackScreenProps} from '@react-navigation/stack';
import {PrimaryParamList} from '@navigation/PrimaryNavigation';
import {Container} from '@components/Container';
import {format} from '@utils/number';
import PercentageChange from '@components/PercentageChange';
import {useSelector} from 'react-redux';
import {findAsset} from '@redux/selectos/assetSelecto';
import {detailScreenStyles} from '@screens/Detail/styles';
import Graphic from '@components/Graphic';

const DetailScreen = ({
  route,
}: StackScreenProps<PrimaryParamList, 'Detail'>) => {
  const {asset} = route.params;
  const {id, logo, name, symbol, changePercent24Hr} = asset;

  const {initSocket, stopSocket} = useWebSocket(`${socket}${id}`);

  const {priceUsd, background} = useSelector(findAsset)(id);

  useEffect(() => {
    initSocket();
    return () => {
      stopSocket();
    };
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

      <Graphic assetId={id} />
    </Container>
  );
};

export default DetailScreen;
