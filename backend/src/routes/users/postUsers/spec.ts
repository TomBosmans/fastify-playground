import { buildApp } from "../../../app"
import { userSchema } from "../../../models/user.schema"

describe("POST /users", () => {
  it("responds 201", async () => {
    const app = await buildApp()
    const payload = userSchema.parse({})
    const response = await app.inject({
      method: "POST",
      url: "/users",
      payload,
    })

    expect(response.statusCode).toEqual(201)
  })

  it("responds 400 with invalid payload", async () => {
    const app = await buildApp()
    const payload = userSchema.parse({})
    const response = await app.inject({
      method: "POST",
      url: "/users",
      payload: { ...payload, firstName: 123 },
    })

    expect(response.statusCode).toEqual(400)
  })
})
