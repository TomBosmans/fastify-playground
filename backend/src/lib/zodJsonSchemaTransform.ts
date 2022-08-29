import { FastifySchema } from "fastify"
import { ZodAny } from "zod"
import { zodToJsonSchema } from "zod-to-json-schema"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Transformed = Record<string, any>

type Schema = {
  hide: boolean
  params: ZodAny
  body: ZodAny
  querystring: ZodAny
  headers: ZodAny
  response: Record<string, ZodAny>
}
export function zodJsonSchemaTransform({ hideList }: { hideList: string[] }) {
  return ({ schema, url }: { schema: FastifySchema; url: string }) => {
    const { params, body, querystring, headers, response, ...rest } = schema as Schema
    const transformed: Transformed = { ...rest }

    if (hideList.includes(url)) return { schema: { hide: true }, url }

    if (params) transformed.params = zodToJsonSchema(params)
    if (body) transformed.body = zodToJsonSchema(body)
    if (querystring) transformed.querystring = zodToJsonSchema(querystring)
    if (headers) transformed.headers = zodToJsonSchema(headers)
    if (response) serializeResponse(transformed, response)

    return { schema: transformed, url }
  }
}

function serializeResponse(transformed: Transformed, response: Schema["response"]) {
  try {
    for (const key of Object.keys(response)) {
      transformed.response = {
        ...transformed.response,
        [key]: zodToJsonSchema(response[key]),
      }
    }
  } catch (_error) {
    const otherResponse = response as unknown as Record<string, { properties: ZodAny }>
    for (const key of Object.keys(otherResponse)) {
      transformed.response = {
        ...transformed.response,
        [key]: zodToJsonSchema(otherResponse[key].properties),
      }
    }
  }
}
