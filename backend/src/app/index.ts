import Fastify, { FastifyServerOptions } from "fastify"
import { registerRoutes } from "../routes"
import { registerEnv } from "./env"
import { registerPrisma } from "./prisma"
import { registerSwagger } from "./swagger"
import { registerZod } from "./zod"

export async function buildApp(opts: FastifyServerOptions = {}) {
  const app = Fastify(opts)

  await registerEnv(app)
  await registerZod(app)
  await registerSwagger(app)
  await registerRoutes(app)
  await registerPrisma(app)

  return app
}
