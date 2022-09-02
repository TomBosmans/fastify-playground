import { z } from "zod"

export const paramsSchema = z.object({
  id: z.string().uuid()
})

export const bodySchema = z.object({
  email: z.string().email().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

export const responseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
})

export type BodyParams = z.infer<typeof bodySchema>
export type Params = z.infer<typeof paramsSchema>
