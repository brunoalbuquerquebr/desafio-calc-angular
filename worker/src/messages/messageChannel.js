import { connect } from 'amqplib'
import { config } from 'dotenv'
import { sum } from '../helpers/utils/sum.js'
config()

export const createMessageChannel = async () => {
    try {
        const connection = await connect(process.env.AMQP_SERVER)
        const channel = await connection.createChannel()
        await channel.assertQueue(process.env.QUEUE_NAME, { durable: false })

        console.log('Connected')

        channel.consume(process.env.QUEUE_NAME, async (msg) => {
            const calc = await JSON.parse(msg.content.toString())
            console.log('Message received');
            console.log(calc);
            const result = sum(parseInt(JSON.stringify(calc.number1)), parseInt(JSON.stringify(calc.number2)))
            console.log(`result: ${result}`);
        })
        
        channel.ack(msg)
    } catch (error) {
        console.log('Error while trying to connect to RabbitMQ');
        console.log(error);
    }
}