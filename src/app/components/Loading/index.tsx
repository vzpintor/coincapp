import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loading = () => {
  return (
    <View style={{...StyleSheet.absoluteFillObject, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loading;
