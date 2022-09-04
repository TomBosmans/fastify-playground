import { asClass, asValue, InjectionMode } from "awilix"
import { buildApp } from "./app"

export async function setupApp() {
  const app = await buildApp({
    logger: {
      level: "info",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    },
  })

  app.container.register("prisma", asValue(app.prisma))
  app.container.loadModules(["src/services/**/*.ts", "src/routes/**/handler.ts"], {
    formatName: "camelCase",

    resolverOptions: {
      injectionMode: InjectionMode.CLASSIC,
      register: asClass,
    },
  })

  try {
    const port = Number(process.env.PORT)
    await app.listen({ port, host: "0.0.0.0" })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

setupApp()
