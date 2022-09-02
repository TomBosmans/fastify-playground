import fp from "fastify-plugin"
import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { PrismaClient } from "@prisma/client"

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaClient = new PrismaClient()

const prismaPlugin: FastifyPluginAsync = fp(async (app) => {
  await prismaClient.$connect()

  app.decorate("prisma", prismaClient)
  app.addHook("onClose", async (app) => await app.prisma.$disconnect())
})

export async function registerPrisma(app: FastifyInstance) {
  app.register(prismaPlugin)
}

export type Transaction = Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">
export default prismaClient
