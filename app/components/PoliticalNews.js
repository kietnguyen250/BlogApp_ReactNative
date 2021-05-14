import React from 'react';

import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import VerticalList from './lists/VerticalList';

const PoliticalNews = ({data}) => {
  return <VerticalList title="Political News" data={data} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});

export default PoliticalNews;
