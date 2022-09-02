import { buildApp } from "../../../app/buildApp"

describe("GET /health", () => {
  it("responds 200", async () => {
    const app = await buildApp()
    const response = await app.inject({
      method: "GET",
      url: "/health"
    })

    expect(response.statusCode).toEqual(200)
  })
})
