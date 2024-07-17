import { useParams } from 'react-router';
import NewsList from './NewsList';
import { useEffect, useState } from 'react';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  console.log(useParams());
  const param = useParams();
  const path = param['*'] || 'all';
  console.log(path);

  useEffect(() => {
    const fetchData = async () => {
      const query = path == 'all' ? '' : `&category=${path}`;
      const data = await fetch(
        'https://newsapi.org/v2/top-headlines' +
        '?country=kr&apiKey=9f5baf7d9f3f42879a20d7d19d9886e4' +
        `${query}`
      );
      const response = await data.json();
      setArticles(response.articles);
    };
    fetchData();
  }, []);

  return (
    <>
      <NewsList articles={articles} />
    </>
  );
};
export default NewsPage;