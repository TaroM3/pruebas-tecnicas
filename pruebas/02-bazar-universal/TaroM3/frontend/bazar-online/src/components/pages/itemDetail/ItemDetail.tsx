import { useParams } from "react-router-dom"
import { useFetch } from "../../../hooks/useFetch"
import { Item, Response } from "../../../interfaces/types"
import { useItems } from "../../../hooks/useItems"
import ItemView from "../../common/itemView/ItemView"
import ItemDescription from "../../common/itemDescription/ItemDescription"
import styles from './ItemDetail.module.css'

const ItemDetail = () => {

  const { id } = useParams()
  const url = `http://localhost:3000/api/items/${id}`
  const result: Response = useFetch(url)
  const items: Array<Item> = useItems({ items: result.response?.items })

  console.log(result)
  return (
      <>
        {items ? items.map((item: Item) => { 
          return ( 
          <section className={styles.container} key={item.id}>
            <ItemView images={item.images.splice(0, 4)} thumbnail={item.thumbnail} description={item.description} title={item.title}/> 
            <ItemDescription item={item} />
          </section>
        )}): (`Cargando. . .  `)}
      </>
  )
}

export default ItemDetail