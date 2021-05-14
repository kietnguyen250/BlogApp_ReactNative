import React from 'react';

import {View, StyleSheet, StatusBar} from 'react-native';
import HorizotalList from './lists/HorizotalList';

const TechNews = ({data}) => {
  return <HorizotalList title="Tech News" data={data} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default TechNews;
