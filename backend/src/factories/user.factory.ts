import { randEmail, randFirstName, randLastName } from "@ngneat/falso"
import { User } from "@prisma/client"
import { z } from "zod"
import prismaClient, { Transaction } from "../app/prisma"

const newUserSchema = z.object({
  email: z.string().email().default(randEmail),
  firstName: z.string().default(randFirstName),
  lastName: z.string().default(randLastName),
})

type NewUser = z.input<typeof newUserSchema>

export function randBuildUser(data: NewUser = {}) {
  return newUserSchema.parse(data)
}

export async function randCreateUser(data: NewUser = {}, prisma: Transaction = prismaClient): Promise<User> {
  return await prisma.user.create({ data: randBuildUser(data) })
}
