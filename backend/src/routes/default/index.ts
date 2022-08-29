import { FastifyInstance } from "fastify"
import { z } from "zod"

export async function defaultRoutes(app: FastifyInstance) {
  app.get(
    "/health",
    {
      schema: {
        tags: ["default"],
        response: {
          200: z.object({
            message: z.string(),
          }),
        },
      },
    },
    () => ({ message: "OK" }),
  )
}
