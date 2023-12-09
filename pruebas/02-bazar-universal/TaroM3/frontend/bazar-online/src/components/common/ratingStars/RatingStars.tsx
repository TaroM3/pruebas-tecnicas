import styles from './RatingStars.module.css';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

interface RatingStarsProps {
  rating: number;
}
const RatingStars = ({ rating }: RatingStarsProps) => {
  const stars = `${((rating / 5) * 100).toString()}%`;
  return (
    <>
      <div className={styles.containerFilled} style={{"width": stars}}>
        <div className={styles.filled}>
          <FaStar className={styles.star} />
          <FaStar className={styles.star} />
          <FaStar className={styles.star} />
          <FaStar className={styles.star} />
          <FaStar className={styles.star} />
        </div>
      </div>
        <div className={styles.outlined}>
          <FaRegStar className={styles.star} />
          <FaRegStar className={styles.star} />
          <FaRegStar className={styles.star} />
          <FaRegStar className={styles.star} />
          <FaRegStar className={styles.star} />
        </div>
    </>
  );
};

export default RatingStars;
