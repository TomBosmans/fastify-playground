import { Transaction } from "../app/prisma"

export interface ServiceInterface<Data, Return> {
  execute(data: Data, prisma?: Transaction): Return
}
