import { Schema, model } from "mongoose";

const calcSchema = new Schema({
    number1: {
        type: Number,
        required: true
    },
    number2: {
        type: Number,
        required: true
    },
    result: {
        type: Number
    },
    calculationStatus: {
        type: String
    }
})

const Calc = model('Calc', calcSchema)

export default Calc