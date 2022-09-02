import { z } from "zod"

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z
    .string()
    .default("3000")
    .transform((port) => Number(port)),
  SWAGGER_TITLE: z.string().default("SWAGGER TITLE"),
  SWAGGER_DESCRIPTION: z.string().default("SWAGGER DESCRIPTION"),
})

export type Env = z.output<typeof envSchema>

