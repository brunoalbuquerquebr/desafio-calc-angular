import { config } from 'dotenv'
config()

import express from "express";
import morgan from 'morgan';
import calsRoutes from './routes/calcsRoutes.js'
import connectDB from './config/db.js';

const PORT = process.env.APP_PORT || 4001
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/calcs', calsRoutes)

app.listen(PORT, () => {
    connectDB().then(() => {
        console.log(`Server runnig on port: ${PORT}`)
    })
})