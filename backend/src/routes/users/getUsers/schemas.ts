import { z } from "zod"

export const responseSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
  .array()

export const querySchema = z.object({
  email: z.string().email().optional(),
  firstName: z.string().optional()
})

export type QueryParams = z.output<typeof querySchema>
export type Response = z.output<typeof responseSchema>
