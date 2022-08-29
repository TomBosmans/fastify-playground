import swagger from "@fastify/swagger"
import { FastifyInstance } from "fastify"
import { version } from "../../package.json"
import { zodJsonSchemaTransform } from "../lib/zodJsonSchemaTransform"

export async function registerSwagger(app: FastifyInstance) {
  app.register(swagger, {
    routePrefix: "/swagger",
    exposeRoute: true,
    staticCSP: true,
    swagger: {
      info: {
        title: "The Title",
        description: "My Description",
        version,
      },
    },
    transform: zodJsonSchemaTransform({
      hideList: [
        "/swagger/",
        "/swagger/initOAuth",
        "/swagger/json",
        "/swagger/uiConfig",
        "/swagger/yaml",
        "/swagger/*",
        "/swagger/static/*",
      ],
    }),
  })
}
