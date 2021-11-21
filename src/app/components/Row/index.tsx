import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {rowStyles} from '@components/Row/styles';
import {RowProps} from '@components/Row/props';
import {format} from '@utils/number';
import PercentageChange from '@components/PercentageChange';

const Row = ({asset}: RowProps) => {
  const {symbol, name, priceUsd, changePercent24Hr, logo, background} = asset;

  return (
    <View style={[rowStyles.container, {backgroundColor: background}]}>
      <View style={rowStyles.brand}>
        <Image
          source={{
            uri: logo,
            width: 30,
            height: 30,
          }}
        />
        <View style={rowStyles.assetName}>
          <Text>{symbol}</Text>
          <Text>{name}</Text>
        </View>
      </View>

      <View style={rowStyles.numeralContainer}>
        <Text>${format(priceUsd)}</Text>
        <View style={rowStyles.change}>
          <PercentageChange changePercent={changePercent24Hr} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Row);
