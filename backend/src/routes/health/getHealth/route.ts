import { FastifyInstance } from "fastify"
import { responseSchema } from "./schemas"

export function getHealth(app: FastifyInstance) {
  app.get(
    "/",
    {
      schema: {
        tags: ["health"],
        response: {
          200: responseSchema,
        },
      },
    },
    () => ({ message: "OK" }),
  )
}
