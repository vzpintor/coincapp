import React from 'react';
import {Image, Text, View} from 'react-native';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';

const Row = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://assets.coincap.io/assets/icons/btc@2x.png',
            width: 30,
            height: 30,
          }}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text>BTC</Text>
          <Text>Bitcoin</Text>
        </View>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <Text>$59,523</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ArrowUpIcon width={30} height={30} color={'red'} />
          <Text>2.63%</Text>
        </View>
      </View>
    </View>
  );
};

export default Row;
