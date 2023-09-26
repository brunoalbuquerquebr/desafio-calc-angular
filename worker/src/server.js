import { config } from 'dotenv'
import mongoose from "mongoose";
import { app } from './app.js'
import { connectDB } from './config/db.js'
import { createMessageChannel } from './messages/messageChannel.js'


const createServer = async () => {
    config()

    await connectDB()
    const PORT = process.env.PORT
    const server = app.listen(PORT, () => {
        console.log(`App runnig on port ${PORT}`);
    })

    await createMessageChannel()

    process.on('SIGINT', async () => {
        await mongoose.close()
        server.close()
        console.log('App server and connection to MongoDB closed');
    })
}

createServer()