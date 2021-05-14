import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';

import blogsApi from '../../api/blogsApi';
import Close from '../common/Close';
import HorizotalList from '../lists/HorizotalList';

import ActivityIndicator from '../common/ActivityIndicator';

import {useNavigation} from '@react-navigation/native';
import Metadata from '../metada';

const {width, height} = Dimensions.get('window');

const BlogDetail = ({route}) => {
  const [blog, setBlog] = useState({});
  const [relatedBlog, setRelatedBlog] = useState([]);
  const {id: postId, category: postCategory} = route.params.item;

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const fetchPost = async id => {
    setLoading(true);
    const result = await blogsApi.getSingle(id);
    setBlog(result);
  };

  const featchRelativePost = async category => {
    const result = await blogsApi.getByCategory(postCategory, 6);
    setRelatedBlog(result.filter(item => item.id !== postId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPost(postId);
    featchRelativePost(postCategory);
  }, []);

  const {title, content, thumbnail} = blog;

  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.image}
        />
        <View style={styles.metadata}>
          <Metadata />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.relatedContainer}>
          <HorizotalList title="Related Posts" data={relatedBlog} />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
  relatedContainer: {
    padding: 10,
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default BlogDetail;
