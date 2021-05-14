import React from 'react';

import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Close = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="close"
        color={'white'}
        size={24}
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    backgroundColor: 'rgba(92, 90, 91, 0.7)',
    padding: 10,
    borderRadius: 50,
  },
});

export default Close;
