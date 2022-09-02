import { User } from "@prisma/client"
import prismaClient, { Transaction } from "../../app/prisma"

type Data = {
  id: User["id"]
}
export async function findOneUser(data: Data, prisma: Transaction = prismaClient) {
  return await prisma.user.findUnique({ where: { id: data.id }})
}
