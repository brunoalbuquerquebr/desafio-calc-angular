import Calc from '../models/Calcs.js'

export default {
    updateResult: async (req, res) => {
        try {
            const { id } = req.params
            const { result } = req.body
            const updateFieldResult = {}
    
            if (result) updateFieldResult.result = result
    
            const calc = await Calc.findByIdAndUpdate(id, updateFieldResult, {
                new: true
            })
            res.json({ calc })
        } catch (error) {
            console.log(error);
        }
    }
}