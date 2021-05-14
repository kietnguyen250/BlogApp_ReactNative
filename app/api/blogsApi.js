import apiClent from './client';

const getAll = async () => {
  try {
    const response = await apiClent.get('/news');

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log('Error while getting all news.', error.message);
  }
};

const getSingle = async id => {
  try {
    const response = await apiClent.get(`/news/single/${id}`);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('Error while getting single news.', error);
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;

  try {
    const response = await apiClent.get(endpoint);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
    console.log('Error while getting categories news.', error.message);
  }
};

export default {getAll, getByCategory, getSingle};
