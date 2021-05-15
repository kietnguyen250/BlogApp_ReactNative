import React from 'react';

import {View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native';
import VerticalList from './VerticalList';

const BlogList = ({route}) => {
  const data = route.params;
  const header = data[0].category.split('-').join(' ').toUpperCase();
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{header}</Text>
      </View>
      <ScrollView>
        <VerticalList data={data} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: StatusBar.currentHeight,
    backgroundColor: '#4e4d4d',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default BlogList;
