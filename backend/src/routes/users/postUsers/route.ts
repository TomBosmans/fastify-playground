import { FastifyInstance, FastifyRequest } from "fastify"
import { createUser } from "../../../services/users/createUser.service"
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
      return await createUser(data)
    },
  )
}
