import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'
import { transactionRoutes } from './routes/transaction'

const app = fastify()

app.register(transactionRoutes, {
  prefix: 'transactions'
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
