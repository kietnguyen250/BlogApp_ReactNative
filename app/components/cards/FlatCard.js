import React from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Title from '../common/Title';
import Subtitle from '../common/Subtitle';

import Metadata from '../metada';

const FlatCard = ({item, onPress}) => {
  const {thumbnail, title, desc} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container]}>
        <Image source={{uri: thumbnail}} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{desc}</Subtitle>
          <View style={styles.metadata}>
            <Metadata />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    height: 110,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
});

export default FlatCard;
