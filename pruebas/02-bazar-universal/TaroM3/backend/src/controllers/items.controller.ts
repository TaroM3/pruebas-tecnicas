import itemService from '../services/items.service'
import Express from 'express'

/**
 * @constructor
 * @method GET
 * @description { Get all items }
 */
const getAll = (_req: Express.Request, res: Express.Response): void => {
  res.status(200).send(itemService.get())
}

const getById = (req: Express.Request, res: Express.Response): void => {
  const id = +req.params.id
  if (id !== undefined) itemService.getById(id) !== undefined ? res.status(200).send(itemService.getById(id)) : res.status(404).send({ message: `Item not ${id} found.` })
}

// const find = (req: Express.Request, res: Express.Response): void => {
//   const options = req.query
// //   itemService.f
// }

export default { getAll, getById }
