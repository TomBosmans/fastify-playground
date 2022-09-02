import { PrismaClient } from "@prisma/client"

type TableNameSelect = {
  tablename: string
}

export async function truncateDB(prisma: PrismaClient) {
  const tableNames = await prisma.$queryRaw<TableNameSelect[]>`
    SELECT tablename FROM pg_tables WHERE schemaname='public'
  `

  for (const { tablename } of tableNames) {
    if (tablename !== "_prisma_migrations") {
      try {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE "public"."${tablename}" CASCADE;`)
      } catch (error) {
        console.error({ error })
      }
    }
  }
}
