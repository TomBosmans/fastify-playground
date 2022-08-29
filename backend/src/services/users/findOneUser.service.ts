import { User } from "@prisma/client"
import prisma, { Transaction } from "../../app/prisma"

type Data = {
  id: User["id"]
}
export async function findOneUser(data: Data, db: Transaction = prisma) {
  return await db.user.findUnique({ where: { id: data.id }})
}
