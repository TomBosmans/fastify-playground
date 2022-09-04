import { PrismaClient, User } from "@prisma/client"
import { Transaction } from "../../app/prisma"

type Data = {
  email: User["email"]
  firstName: User["firstName"]
  lastName: User["lastName"]
}
export default class CreateUserService {
  constructor(private prisma: PrismaClient) {}

  public async execute(data: Data, prisma: Transaction = this.prisma) {
    return await prisma.user.create({ data })
  }
}
