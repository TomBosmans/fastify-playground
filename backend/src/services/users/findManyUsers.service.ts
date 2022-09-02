import prismaClient, { Transaction } from "../../app/prisma";

export async function findManyUsers(prisma: Transaction = prismaClient) {
  return await prisma.user.findMany()
}
