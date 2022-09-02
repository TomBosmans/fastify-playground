import { describe, expect, it } from "@jest/globals"
import { buildApp } from "../../../app"
import { randCreateUser } from "../../../factories/user.factory"

describe("GET /users", () => {
  it("responds 200", async () => {
    const app = await buildApp()
    await randCreateUser()

    const response = await app.inject({
      method: "GET",
      url: "/users",
    })

    expect(response.statusCode).toEqual(200)
  })
})
