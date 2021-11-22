import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {rowStyles} from '@components/Row/styles';
import {RowProps} from '@components/Row/props';
import {format} from '@utils/number';
import PercentageChange from '@components/PercentageChange';
import {navigate} from '@navigation/NavigationUtilities';

const Row = ({asset}: RowProps) => {
  const {symbol, name, priceUsd, changePercent24Hr, logo, background} = asset;

  const goToDetail = () => {
    navigate('Detail', {asset});
  };

  return (
    <TouchableOpacity
      style={[rowStyles.container, {backgroundColor: background}]}
      onPress={goToDetail}>
      <>
        <View style={rowStyles.brand}>
          <Image
            source={{
              uri: logo,
              width: 30,
              height: 30,
            }}
          />
          <View style={rowStyles.assetName}>
            <Text style={rowStyles.label}>{symbol}</Text>
            <Text style={rowStyles.label}>{name}</Text>
          </View>
        </View>

        <View style={rowStyles.numeralContainer}>
          <Text style={rowStyles.label}>${format(priceUsd)}</Text>
          <View style={rowStyles.change}>
            <PercentageChange changePercent={changePercent24Hr} />
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default React.memo(Row);
