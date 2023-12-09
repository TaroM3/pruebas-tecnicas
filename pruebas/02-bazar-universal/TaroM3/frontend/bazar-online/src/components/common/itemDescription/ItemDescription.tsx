import { Item } from '../../../interfaces/types';
import ButtonCard from '../buttonCard/ButtonCard';
import Counter from '../counter/Counter';
import RatingStars from '../ratingStars/RatingStars';
import styles from './ItemDescription.module.css';

interface Props {
  item: Item;
}
const ItemDescription = ({ item }: Props) => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>{item.title} - {item.brand}</h1>
          <h2>{item.category}</h2>
          {/* <h3>{item.category}</h3> */}
        </div>
      </header>
      <article className={styles.body}>
        <div className={styles.ratingContainer}>
    
        <div className={styles.ratingStars}>
          <RatingStars rating={item.rating} />
        </div>

        <p>{item.rating}</p>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            <h3>
              US${(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </h3>
            <p>US${item.price}</p>
          </div>
          <h5>{item.discount}% OFF</h5>
        </div>
      </article>
      <footer className={styles.footer}>
        <Counter stock={item.stock}/>
        <ButtonCard content='Comprar' />
      </footer>
    </section>
  );
};

export default ItemDescription;
