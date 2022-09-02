import { z } from "zod"

export const bodySchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
})

export const responseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type BodyParams = z.output<typeof bodySchema>
