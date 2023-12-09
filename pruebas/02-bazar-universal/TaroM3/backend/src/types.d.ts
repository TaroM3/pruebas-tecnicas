export interface Item {
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

export interface SearchingProps {
  title?: string
  description?: string
  category?: string
  maxPrice?: number
  minPrice?: number
  brand?: string
  minRating?: number
  maxRating?: number
}
