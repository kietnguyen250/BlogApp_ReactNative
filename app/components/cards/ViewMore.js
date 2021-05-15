import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const ViewMore = ({style, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>View More </Text>

        <Icon
          style={styles.icon}
          name={'arrow-right-thick'}
          color={'#7a74e0'}
          size={18}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7a74e0',
  },
  icon: {
    marginTop: 3,
  },
});

export default ViewMore;
