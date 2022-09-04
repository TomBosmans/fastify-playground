import { PrismaClient } from "@prisma/client"
import { Transaction } from "../../app/prisma"

export default class FindManyUsersService {
  constructor(private prisma: PrismaClient) {}

  public async execute(prisma: Transaction = this.prisma) {
    console.log(this.prisma)
    return await prisma.user.findMany()
  }
}
