import mongoose from "mongoose";
import { config } from 'dotenv'
config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/27017/testing'
const name_DB = process.env.DB_DATABASE

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)

        console.log('MongoDB is connected');

    } catch (error) {
        console.log(error);

        process.exit(1)
    }
}
