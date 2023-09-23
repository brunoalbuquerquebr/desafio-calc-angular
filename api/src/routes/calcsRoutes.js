import { Router } from 'express'
import CalcController from '../controllers/CalcController.js'
const router = Router()

router.get('/', CalcController.getAll)
router.get('/:id', CalcController.getById)
router.post('/', CalcController.addCalc)

// router.get('/', async (req, res) => {
//     try {
//         const calcs = await Calc.find()
//         res.json({ calcs })
//     } catch (error) {
//         console.log(error);
//     }
// })

// router.post('/', async (req, res) => {
//     try {
//         const { number1, number2 } = req.body
//         const result = number1 + number2
//         const calc = await Calc.create({
//             number1,
//             number2,
//             result
//         })
//         res.json({ calc })
//     } catch (error) {
//         console.log(error);
//     }
// })

export default router