const amqp = require('amqplib/callback_api')
import { config } from 'dotenv'
config()

amqp.connect(process.env.AMQP_SERVER, async (error, connection) => {
    if (error) throw error

    await connection.createChannel((error, channel) => {
        if (error) throw error

        const queue = 'Hello'
        const message = Buffer.from('Hello World')

        channel.assertQueue(queue, { durable: false })
        channel.sendToQueue(queue, message)

        console.log(`Mesagem: ${message}`);
    })
    setTimeout(() => {
        connection.close()
        process.exit(0)
    }, 500)
})