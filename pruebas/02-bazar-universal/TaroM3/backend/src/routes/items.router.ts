import { Router } from 'express'
import itemsController from '../controllers/items.controller'

const router = Router()

router.get('/', itemsController.getAll)

router.get('/:id', itemsController.getById)

export default router
