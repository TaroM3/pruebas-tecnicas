import { Item as Items, SearchingProps } from '../types'
import productsData from '../../../../products.json'

const items: Items[] = productsData.products as Items[]

const get = (): Items[] => items

const getById = (id: number): Items | undefined => items.find((item) => item.id === id)

// const find = (options: SearchingProps): Items[] => {
// }

const addEntry = (): undefined => undefined

export default { get, getById, addEntry }
