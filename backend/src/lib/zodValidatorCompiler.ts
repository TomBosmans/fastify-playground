import { FastifySchemaCompiler } from "fastify"
import { ZodAny } from "zod"

export const zodValidatorCompiler: FastifySchemaCompiler<ZodAny> = ({ schema }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data): any => {
    try {
      return { value: schema.parse(data) }
    } catch (error) {
      return { error }
    }
  }
}
