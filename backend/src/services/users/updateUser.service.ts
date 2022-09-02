import { User } from "@prisma/client"
import prismaClient, { Transaction } from "../../app/prisma"

type Data = {
  id: User["id"]
  email?: User["email"]
  firstName?: User["firstName"]
  lastName?: User["lastName"]
}
export async function updateUser({ id, ...data }: Data, prisma: Transaction = prismaClient): Promise<User> {
  return await prisma.user.update({ where: { id }, data })
}
