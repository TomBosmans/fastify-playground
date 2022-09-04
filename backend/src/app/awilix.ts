import fp from "fastify-plugin"
import { AwilixContainer, createContainer } from "awilix"
import { FastifyInstance, FastifyPluginAsync } from "fastify"

const container = createContainer()

declare module "fastify" {
  interface FastifyInstance {
    container: AwilixContainer
  }
}

const awilixPlugin: FastifyPluginAsync = fp(async (app) => {
  app.decorate("container", container)
})

export async function registerAwilix(app: FastifyInstance) {
  await app.register(awilixPlugin)
}
