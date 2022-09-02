import { describe, expect, it } from "@jest/globals"
import { buildApp } from "../../../app/buildApp"
import { userSchema } from "../../../models/user.schema"

describe("GET /users", () => {
  it("responds 200", async () => {
    const app = await buildApp()
    await app.db.user.create({ data: userSchema.parse({}) })

    const response = await app.inject({
      method: "GET",
      url: "/users",
    })

    expect(response.statusCode).toEqual(200)
  })
})
