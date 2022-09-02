import { Prisma, User } from "@prisma/client"
import prismaClient, { Transaction } from "../../app/prisma"

type Data = Prisma.UserCreateInput
export async function createUser(data: Data, prisma: Transaction = prismaClient): Promise<User> {
  return await prisma.user.create({ data })
}
