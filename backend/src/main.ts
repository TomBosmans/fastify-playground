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

  try {
    const port = Number(process.env.PORT)
    await app.listen({ port, host: "0.0.0.0" })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

setupApp()
