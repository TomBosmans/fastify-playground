import { FastifyInstance, FastifyRequest } from "fastify"
import { Params } from "../getUser/schemas"
import { BodyParams, bodySchema, paramsSchema, responseSchema } from "./schemas"

export function patchUsersRoute(app: FastifyInstance) {
  app.patch(
    "/:id",
    {
      schema: {
        tags: ["users"],
        params: paramsSchema,
        body: bodySchema,
        response: {
          200: responseSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Params: Params; Body: BodyParams }>) => {
      const body = request.body
      const { id } = request.params
      const updateUserService = app.container.resolve("updateUserService")
      return await updateUserService.execute({ id, ...body })
    },
  )
}
