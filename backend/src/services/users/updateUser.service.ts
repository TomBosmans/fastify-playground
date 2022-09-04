import { PrismaClient, User } from "@prisma/client"
import { Transaction } from "../../app/prisma"

type Data = {
  id: User["id"]
  email?: User["email"]
  firstName?: User["firstName"]
  lastName?: User["lastName"]
}

export default class UpdateUserService {
  constructor(private prisma: PrismaClient) {}

  public async execute({ id, ...data }: Data, prisma: Transaction = this.prisma) {
    return await prisma.user.update({ where: { id }, data })
  }
}
