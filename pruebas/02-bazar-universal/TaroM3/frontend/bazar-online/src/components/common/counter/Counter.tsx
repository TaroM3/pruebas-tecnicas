import styles from './Counter.module.css'
import { useState } from 'react'

interface CounterProps {
    stock: number
}
const Counter = ({stock}: CounterProps) => {
    const [counter, setCounter] = useState(1)
    const handleCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.innerHTML === '+'){
            setCounter(counter + 1)
        }else{
            setCounter(counter - 1)
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.counter}>
        <button className={styles.left} disabled={(counter <= 1) && true} onClick={handleCounter}>-</button><p>{counter}</p><button className={styles.right} disabled={counter >= stock}onClick={handleCounter}>+</button>
        </div>
    </div>
  )
}

export default Counter