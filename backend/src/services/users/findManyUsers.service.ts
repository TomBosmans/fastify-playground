import prisma, { Transaction } from "../../app/prisma";

export async function findManyUsers(db: Transaction = prisma) {
  return await db.user.findMany()
}
