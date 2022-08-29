import fp from "fastify-plugin"
import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { PrismaClient } from "@prisma/client"

declare module "fastify" {
  interface FastifyInstance {
    db: PrismaClient
  }
}

const prisma = new PrismaClient()

const prismaPlugin: FastifyPluginAsync = fp(async (app) => {
  await prisma.$connect()

  app.decorate("db", prisma)
  app.addHook("onClose", async (app) => await app.db.$disconnect())
})

export async function registerPrisma(app: FastifyInstance) {
  app.register(prismaPlugin)
}

export type Transaction = Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">
export default prisma
