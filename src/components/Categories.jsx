import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const categories = [
    { name: 'all', text: '전체보기' },
    { name: 'business', text: '비즈니스' },
    { name: 'entertainment', text: '엔터테인먼트' },
    { name: 'health', text: '건강' },
    { name: 'science', text: '과학' },
    { name: 'sports', text: '스포츠' },
    { name: 'technology', text: '기술' },
];

const Categories = () => {
    return (
        <div className={styles.block}>
            {
                categories.map((c) => {
                    return (
                        <Link to={c.name === 'all' ? '/' : `/${c.name}`}
                            key={c.name}
                            className={styles.category}>
                            {c.text}
                        </Link>
                        // <a href={c.name === 'all' ? '/' : `/${c.name}`}
                        //     key={c.name}
                        //     className={styles.category}>
                        //     {c.text}
                        // </a>
                    )
                })
            }
        </div>
    );
};

export default Categories;