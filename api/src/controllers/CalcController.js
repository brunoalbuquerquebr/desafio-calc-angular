import Calc from '../models/Calcs.js'

export default {
    addCalc: async (req, res) => {
        try {
            const { number1, number2 } = req.body
            const calc = await Calc.create({
                number1,
                number2
            })
            res.json({ calc })
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const calcs = await Calc.find()
            res.json({ calcs })
        } catch (error) {
            console.log(error);
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const calc = await Calc.findById(id)
            res.json({ calc })
        } catch (error) {
            console.log(error);
        }
    }
}