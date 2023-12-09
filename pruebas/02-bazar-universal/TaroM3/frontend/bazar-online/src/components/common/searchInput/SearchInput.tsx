import { useRef, useState } from 'react'
import styles from './SearchInput.module.css'
import { Item } from '../../../interfaces/types'

interface SearchInputProps{
    scale?: number
}
const SearchInput = ({ scale=1}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [items, setItems] = useState<Array<Item>>([])
  const [query, setQuery] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const value = inputRef.current?.value
        if(value === "")return 
        // setItems(prev => {return [...prev, value]})
        e.currentTarget.reset()
    }
  return (
    <div className={styles.container} style={{"transform": `scale(${scale})`}}>
        <form onSubmit={handleSubmit}>
        <input type='search' placeholder='Search' ref={inputRef}/>
        </form>

    </div>
  )
}

export default SearchInput