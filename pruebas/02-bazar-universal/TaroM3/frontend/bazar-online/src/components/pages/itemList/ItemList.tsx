// import { useEffect, useState } from "react"
import { Item, Response } from "../../../interfaces/types"
import { useFetch } from "../../../hooks/useFetch"
import ItemCard from "../../common/itemCard/ItemCard"
import { useItems } from "../../../hooks/useItems"
import styles from './ItemList.module.css'

// interface Response {
//   response: { items: Array<{
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     discountPercentage: number;
//     rating: number;
//     stock: number;
//     brand: string;
//     category: string;
//     thumbnail: string;
//     image: string[];
  
//   }> } 
//   error: object
// }
const ItemList = () => {

    const result: Response = useFetch('http://127.0.0.1:3000/api/items')

    const items: Array<Item> | Item = useItems({ items: result.response?.items })

  return (
    <div className={styles.list}>
      { items ?  items.map((item)=> {
          return (<ItemCard item={item} key={item.id} />)
        }) : `Cargando. . .  ` }
    </div>
  )
}

export default ItemList