import { PrismaClient, User } from "@prisma/client"
import { Transaction } from "../../app/prisma"

type Data = Pick<User, "id">

export default class FindOneUserService {
  constructor(private prisma: PrismaClient) {}

  public async execute(data: Data, prisma: Transaction = this.prisma) {
    return await prisma.user.findUnique({ where: { id: data.id }})
  }
}
