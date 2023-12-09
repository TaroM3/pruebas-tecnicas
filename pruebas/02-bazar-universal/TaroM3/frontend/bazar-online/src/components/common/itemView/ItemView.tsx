import { useState } from 'react'
import styles from './ItemView.module.css'

interface ItemViewProps {
  images: string[]
  thumbnail: string
  title: string
  description: string
}
const ItemView = ({ images, thumbnail, title, description }: ItemViewProps) => {
    const [mainImg, setMainImg] = useState(thumbnail)

    const handleChange = (e: React.MouseEvent<HTMLImageElement>) => {
      setMainImg(e.currentTarget.src)
    }
    return (
    <section className={styles.viewContainer}>
      <picture className={styles.mainThumbnail}>  
        <img src={mainImg} alt={title} />
      </picture>
      <div className={styles.asideContainer}>
      <figure className={styles.asideThumbnails}>
        {images.map((image, index) => {
          return <img src={image} alt={title} key={index} onClick={handleChange}/>;
        })}   
      </figure>
      <figcaption>{description}</figcaption>
      </div>
    </section>
  );
};

export default ItemView;
