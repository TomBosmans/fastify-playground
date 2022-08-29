import { FastifyInstance } from "fastify"
import { findManyUsers } from "../../../services/users/findManyUsers.service"
import { querySchema, responseSchema } from "./schemas"

export function getUsersRoute(app: FastifyInstance) {
  app.get(
    "/",
    {
      schema: {
        tags: ["users"],
        querystring: querySchema,
        response: {
          200: responseSchema
        }
      },
    },
    async () => {
      const users = await findManyUsers()
      return users
    },
  )
}
