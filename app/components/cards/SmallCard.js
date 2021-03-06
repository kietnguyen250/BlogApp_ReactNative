import React from 'react';

import {View, StyleSheet, StatusBar, Dimensions} from 'react-native';
import BlockCard from './BlockCard';
import ViewMore from './ViewMore';

import blogsApi from '../../api/blogsApi';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const SmallCard = ({item, onPress}) => {
  const navigation = useNavigation();
  const handleViewMore = async category => {
    const result = await blogsApi.getByCategory(category);
    navigation.navigate('BlogList', result);
  };

  if (item.type === 'viewMore') {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }

  return (
    <BlockCard
      onPress={onPress}
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 240,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: width / 2,
    height: 240,
  },
});

export default SmallCard;
