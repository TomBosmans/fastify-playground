import { FastifyInstance, FastifyRequest } from "fastify"
import { Params, paramsSchema, responseSchema } from "./schemas"

export function getUserRoute(app: FastifyInstance) {
  app.get(
    "/:id",
    {
      schema: {
        tags: ["users"],
        params: paramsSchema,
        response: {
          200: responseSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Params: Params }>) => {
      const { id } = request.params
      const findOneUserService = app.container.resolve("findOneUserService")
      return await findOneUserService.execute({ id })
    },
  )
}
