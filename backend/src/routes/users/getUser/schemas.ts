import { z } from "zod"

export const paramsSchema = z.object({
  id: z.string().uuid(),
})

export const responseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Params = z.infer<typeof paramsSchema>
