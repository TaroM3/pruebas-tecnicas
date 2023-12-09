export interface Item {
    id: number
    title: string
    description: string
    price: number
    discount: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }


export interface Data {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  
  }
export interface Response {
    response: { items: Array<Data> } 
    error: object
  }