import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import LottieView from 'lottie-react-native';

export default function ActivityIndicator({visible}) {
  useEffect(() => {
    StatusBar.setBackgroundColor('#f7f3f3');
  });
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
