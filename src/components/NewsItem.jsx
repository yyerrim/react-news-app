import styles from './NewsItem.module.css';

const NewsItem = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.thumbnail}>
        <a href={props.article.url} target="_blank">
          <img src={props.article.urlToImage}
            alt="thumbnail" />
        </a>
      </div>
      <div className={styles.contents}>
        <h2>
          <a href={props.article.url} target="_blank">
            {props.article.title}
          </a>
        </h2>
        <p>내용</p>
      </div>
    </div>
  );
};
export default NewsItem;