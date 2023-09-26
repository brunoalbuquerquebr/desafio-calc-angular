const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', async (error, connection) => {
    if (error) throw error

    await connection.createChannel((error, channel) => {
        if (error) throw error

        const queue = 'Hello'

        channel.assertQueue(queue, { durable: false })

        console.log(`Aguardando Mesagens`);

        channel.consume(queue, (msg) => {
            console.log(msg.content.toString());
        })
    })
})
