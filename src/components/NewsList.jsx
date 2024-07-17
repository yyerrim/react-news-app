import NewsItem from './NewsItem';
import styles from './NewsList.module.css';

const NewsList = (props) => {
  return (
    <div className={styles.block}>
      {
        props.articles.map((article) => {
          return <NewsItem article={article} />
        })
      }
    </div>
  );
};
export default NewsList;