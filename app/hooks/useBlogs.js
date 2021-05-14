import {useState, useEffect} from 'react';
import blogsApi from '../api/blogsApi';

export default useBlogs = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  const qty = 5;

  const [loading, setLoading] = useState(false);

  const filterFeatured = data => {
    return data.filter(item => item.featured === 'on').reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter(item => item.category === category)
      .reverse()
      .splice(0, qty);

    if (result.length) {
      result.push({type: 'viewMore', category: category, id: category});
    }
    console.log(result);
    return result;
  };

  const filterMultipleNews = async () => {
    setLoading(true);
    const allBlogs = await blogsApi.getAll();
    // const featured = allBlogs.fillter(item =>  item.featured === 'on').reverse()[0];

    setFeaturedNews(filterFeatured(allBlogs));

    setBreakingNews(filterByCategory(allBlogs, 'breaking-news'));

    setTechNews(filterByCategory(allBlogs, 'tech'));

    setPoliticalNews(filterByCategory(allBlogs, 'political'));

    setEntertainmentNews(filterByCategory(allBlogs, 'entertainment'));

    setLoading(false);
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [
    featuredNews,
    breakingNews,
    techNews,
    politicalNews,
    entertainmentNews,
    loading,
  ];
};
