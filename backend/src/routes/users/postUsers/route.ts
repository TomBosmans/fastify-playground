import { FastifyInstance, FastifyRequest } from "fastify"
import { BodyParams, bodySchema, responseSchema } from "./schemas"

export function postUserRoute(app: FastifyInstance) {
  app.post(
    "/",
    {
      schema: {
        tags: ["users"],
        body: bodySchema,
        response: {
          201: responseSchema,
        },
      },
    },
    async (request: FastifyRequest<{ Body: BodyParams }>, reply) => {
      reply.code(201)
      const data = request.body
      console.log(app.container)
      const createUserService = app.container.resolve("createUserService")
      return await createUserService.execute(data)
    },
  )
}
