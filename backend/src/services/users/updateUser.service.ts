import { User } from "@prisma/client"
import prisma, { Transaction } from "../../app/prisma"

type Data = {
  id: User["id"]
  email?: User["email"]
  firstName?: User["firstName"]
  lastName?: User["lastName"]
}
export async function updateUser({ id, ...data }: Data, db: Transaction = prisma): Promise<User> {
  return await db.user.update({ where: { id }, data })
}
