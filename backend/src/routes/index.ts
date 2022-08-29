import { FastifyInstance } from "fastify"
import { defaultRoutes } from "./default"
import { usersRoutes } from "./users"

export async function registerRoutes(app: FastifyInstance) {
  await app.register(defaultRoutes)
  await app.register(usersRoutes, { prefix: "users" })
}
