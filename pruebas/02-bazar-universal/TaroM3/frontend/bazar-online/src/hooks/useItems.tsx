import { Data, Item } from "../interfaces/types";

interface Props {
  items: Array<Data> | Data;
}

export function useItems( { items }  : Props) {
  if(!Array.isArray(items)){
    const itemsMapped : Item = {
      id: items.id,
      title: items.title,
      description: items.description,
      price: items.price,
      discount: items.discountPercentage,
      rating: items.rating,
      stock: items.stock,
      brand: items.brand,
      category: items.category,
      thumbnail: items.thumbnail,
      images: items.images,
    }
    return [itemsMapped]
  }else{
    const itemsMapped: Item[] = items.map((item) : Item => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        discount: item.discountPercentage,
        rating: item.rating,
        stock: item.stock,
        brand: item.brand,
        category: item.category,
        thumbnail: item.thumbnail,
        images: item.images,
      };
    });
    return itemsMapped
  }
  
}
