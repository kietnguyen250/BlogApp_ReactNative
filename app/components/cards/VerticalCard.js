import React from 'react';

import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import ViewMore from './ViewMore';
import FlatCard from './FlatCard';

import blogsApi from '../../api/blogsApi';
import {useNavigation} from '@react-navigation/native';

const VerticalCard = ({item, onPress}) => {
  const navigation = useNavigation();
  const handleViewMore = async category => {
    const result = await blogsApi.getByCategory(category);
    navigation.navigate('BlogList', result);
  };
  if (item.type === 'viewMore') {
    return <ViewMore onPress={() => handleViewMore(item.category)} />;
  }

  return <FlatCard onPress={onPress} item={item} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default VerticalCard;
