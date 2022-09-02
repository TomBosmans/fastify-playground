import { FastifySerializerCompiler } from "fastify/types/schema"
import { ZodAny } from "zod"

export const zodSerializerCompiler: FastifySerializerCompiler<ZodAny> = ({ schema }) => {
  return (data) => {
    try {
      const json = JSON.stringify(data)
      const result = schema.safeParse(JSON.parse(json))
      if (result.success) return JSON.stringify(result.data)
    } catch (_error) {
      // when #querystring is not present the zod object gets nested under properties.
      const otherSchema = schema as unknown as { properties: ZodAny }
      const result = otherSchema.properties.safeParse(JSON.parse(JSON.stringify(data)))
      if (result.success) return JSON.stringify(result.data)
    }

    throw Error("Response doesn't match the schema")
  }
}
