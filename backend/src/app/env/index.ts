import fp from "fastify-plugin"
import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { z } from "zod"
import { envSchema } from "./env.schema"

declare module "fastify" {
  interface FastifyInstance {
    env: z.output<typeof envSchema>
  }
}

const env = envSchema.parse(process.env)
export const envPlugin: FastifyPluginAsync = fp(async (app) => {
  app.decorate("env", env)
})

export async function registerEnv(app: FastifyInstance) {
  await app.register(envPlugin)
}

export default env
