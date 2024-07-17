import { useParams } from 'react-router';
import NewsList from './NewsList';
import { useEffect, useState } from 'react';
import Categories from './Categories';

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

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
  }, [path]);

  return (
    <>
      <Categories categories={categories} />
      <NewsList articles={articles} />
    </>
  );
};
export default NewsPage;