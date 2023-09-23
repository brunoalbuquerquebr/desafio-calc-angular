const amqp = require('amqplib/callback_api')
import { Channel, connect } from 'amqplib'
import { config } from 'dotenv'
config()

export const createMessageChannel = async () => {
    try {
        const connection = await connect(process.env.AMQP_SERVER)
        const channel = await connection.createChannel()
        await channel.assertQueue(process.env.QUEUE_NAME)

        console.log('Connected')

        return channel
    } catch (error) {
        console.log('Error while trying to connect to RabbitMQ');
        console.log(error);

        return null
    }
}