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
  createdAt: z.string().default(new Date().toISOString()),
  updatedAt: z.string().default(new Date().toISOString()),
})

export type BodyParams = z.infer<typeof bodySchema>
