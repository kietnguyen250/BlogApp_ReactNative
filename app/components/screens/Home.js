import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import useBlogs from '../../hooks/useBlogs';

import SearchBar from '../../components/SearchBar';
import Screen from '../common/Screen';
import FeaturedNews from '../../components/FeaturedNews';
import BreakingNews from '../../components/BreakingNews';
import TechNews from '../../components/TechNews';
import PoliticalNews from '../../components/PoliticalNews';
import EntertainmentNews from '../../components/EntertainmentNews';
import ActivityIndicator from '../common/ActivityIndicator';

const Home = () => {
  const [
    featuredNews,
    breakingNews,
    techNews,
    politicalNews,
    entertainmentNews,
    loading,
  ] = useBlogs();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <SearchBar />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
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
});

export default Home;
