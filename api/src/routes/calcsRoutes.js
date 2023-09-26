import { Router } from 'express'
import CalcController from '../controllers/CalcController.js'
const router = Router()

router.get('/', CalcController.getAll)
router.get('/:id', CalcController.getById)
router.post('/', CalcController.addCalc)

export default router