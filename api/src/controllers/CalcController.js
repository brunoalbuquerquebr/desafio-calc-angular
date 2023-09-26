import { createMessageChannel } from '../messages/messageChannel.js'
import Calc from '../models/Calcs.js'

export default {
    addCalc: async (req, res) => {
        const messageChannel = await createMessageChannel()
        if (messageChannel) {
            try {

                const { number1, number2 } = req.body
                const calc = await Calc.create({
                    number1,
                    number2
                })
                res.json({ calc })
                messageChannel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(JSON.stringify(calc).toString()))
                console.log('Message sent to queue');
            } catch (error) {
                console.log(error);
            }
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