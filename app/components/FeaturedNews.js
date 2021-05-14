import React from 'react';

import {View, StyleSheet, StatusBar} from 'react-native';
import BlockCard from './cards/BlockCard';

import {useNavigation} from '@react-navigation/native';

const FeaturedNews = ({item}) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate('BlogDetail', {item})}
      item={item}
      style={{marginVertical: 15}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default FeaturedNews;
