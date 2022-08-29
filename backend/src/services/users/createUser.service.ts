import { Prisma, User } from "@prisma/client"
import prisma, { Transaction } from "../../app/prisma"

type Data = Prisma.UserCreateInput
export async function createUser(data: Data, db: Transaction = prisma): Promise<User> {
  return await db.user.create({ data })
}
