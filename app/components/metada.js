import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Metadata() {
  return (
    <View style={styles.metadata}>
      <View style={styles.time}>
        <Icon
          style={styles.icon}
          name={'clock-time-four-outline'}
          color={'#92909d'}
          size={18}
        />
        <Text style={{color: '#92909d'}}>45 m ago</Text>
      </View>

      <View style={styles.comment}>
        <Icon
          style={styles.icon}
          name={'comment-text-outline'}
          color={'#92909d'}
          size={18}
        />
        <Text style={{color: '#92909d'}}>68 Comments</Text>
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 10,
  },
  time: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  comment: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
  },
});
