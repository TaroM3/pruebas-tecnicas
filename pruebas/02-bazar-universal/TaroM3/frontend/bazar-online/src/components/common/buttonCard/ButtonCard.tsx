import { Link } from 'react-router-dom'
import styles from './ButtonCard.module.css'

interface ButtonCardProps {
    content: string
    url?: string
}

const ButtonCard = ({ content, url }: ButtonCardProps) => {
  return (
    url ? <div className={styles.btnContainer}>
        <button className={styles.btn}><Link to={url}>{content}</Link></button>
    </div>
    :<div className={styles.btnContainer}>
        <button className={styles.btn}>{content}</button>
    </div> 
  )
}

export default ButtonCard