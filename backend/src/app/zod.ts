import { FastifyInstance } from "fastify"
import { zodSerializerCompiler } from "../lib/zodSerializerCompiler"
import { zodValidatorCompiler } from "../lib/zodValidatorCompiler"

export async function registerZod(app: FastifyInstance) {
  app.setValidatorCompiler(zodValidatorCompiler)
  app.setSerializerCompiler(zodSerializerCompiler)
}
