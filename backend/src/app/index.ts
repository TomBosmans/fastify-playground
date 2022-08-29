import Fastify from 'fastify'
import { registerSwagger } from "./swagger"
import { registerRoutes } from '../routes'
import { registerPrisma } from './prisma'
import { registerZod } from './zod'

export async function setupApp() {
  const app = Fastify({ logger: true })

  await registerZod(app)
  await registerSwagger(app)
  await registerRoutes(app)
  await registerPrisma(app)

  try {
    const port = Number(process.env.PORT)
    await app.listen({ port, host: "0.0.0.0" })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

setupApp()
