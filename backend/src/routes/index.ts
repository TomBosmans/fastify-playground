import { FastifyInstance } from "fastify"
import { healthRoutes } from "./health"
import { usersRoutes } from "./users"

export async function registerRoutes(app: FastifyInstance) {
  await app.register(healthRoutes, { prefix: "health" })
  await app.register(usersRoutes, { prefix: "users" })
}
