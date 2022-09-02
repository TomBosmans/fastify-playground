import { randEmail, randFirstName, randLastName, randPastDate, randUuid } from "@ngneat/falso"
import { z } from "zod"

export const userSchema = z.object({
  id: z.string().uuid().default(randUuid),
  email: z.string().email().default(randEmail),
  firstName: z.string().default(randFirstName),
  lastName: z.string().default(randLastName),
  createdAt: z.date().default(randPastDate),
  updatedAt: z.date().default(randPastDate),
})
