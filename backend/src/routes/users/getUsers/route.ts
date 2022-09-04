import { FastifyInstance } from "fastify"
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
      const findManyUsersService = app.container.resolve("findManyUsersService")
      return await findManyUsersService.execute()
    },
  )
}
