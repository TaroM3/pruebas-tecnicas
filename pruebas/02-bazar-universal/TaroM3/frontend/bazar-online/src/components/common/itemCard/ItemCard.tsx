import { Link } from 'react-router-dom';
import { Item } from '../../../interfaces/types';
import styles from './ItemCard.module.css';
import ButtonCard from '../buttonCard/ButtonCard';

interface Props {
  item: Item;
}

const ItemCard = ({ item }: Props) => {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <Link to={`/items/${item.id}`}>
            <div className={styles.thumbnail}>
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <h1>{item.title}</h1>
          </Link>
        </header>
        <footer className={styles.footer}>
          <h2>
            <Link to={`/items/${item.id}`}>${item.price}</Link>
          </h2>

          <ButtonCard content='Ver Detalle' url={`/items/${item.id}`} />
        </footer>
      </div>
    </article>
  );
};

export default ItemCard;
