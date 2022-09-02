import { FastifyInstance } from "fastify"
import { getHealth } from "./getHealth/route"

export async function healthRoutes(app: FastifyInstance) {
  getHealth(app)
}
