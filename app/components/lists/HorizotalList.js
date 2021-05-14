import React from 'react';

import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import SmallCard from '../cards/SmallCard';
import Title from '../common/Title';
import {useNavigation} from '@react-navigation/native';

const HorizotalList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <SmallCard
              onPress={() => navigation.push('BlogDetail', {item})}
              item={item}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
  listStyle: {
    marginVertical: 15,
  },
});

export default HorizotalList;
