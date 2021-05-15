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

const BlockCard = ({style, imageStyle, item, onPress}) => {
  const {thumbnail, title, desc} = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{desc}</Subtitle>
        </View>
        <View style={styles.metadata}>
          <Metadata />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 330,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    position: 'absolute',
    bottom: 8,
  },
});

export default BlockCard;
