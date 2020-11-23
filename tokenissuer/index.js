'use strict'

const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/auth', async (request, reply) => {
  reply.headers({
    'X-JWT-Token': 'test-JWT',
  })
  reply.status(204)
  return
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()