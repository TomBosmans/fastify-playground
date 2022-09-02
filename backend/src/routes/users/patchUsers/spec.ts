import { randUuid } from "@ngneat/falso"
import { buildApp } from "../../../app"
import { userSchema } from "../../../models/user.schema"

describe("PATCH /user/:id", () => {
  it("responds 200", async () => {
    const app = await buildApp()

    const { id } = await app.db.user.create({ data: userSchema.parse({}) })
    const response = await app.inject({
      method: "PATCH",
      url: `/users/${id}`,
      payload: { firstName: "Tom" },
    })

    expect(response.statusCode).toEqual(200)
  })

  it("responds 400 with invalid :id", async () => {
    const app = await buildApp()

    const response = await app.inject({
      method: "PATCH",
      url: "/users/123",
      payload: { firstName: "Tom" },
    })

    expect(response.statusCode).toEqual(400)
  })

  it("responds 400 with invalid payload", async () => {
    const app = await buildApp()

    const response = await app.inject({
      method: "PATCH",
      url: "/users/123",
      payload: { firstName: 123 },
    })

    expect(response.statusCode).toEqual(400)
  })

  it("responds 404 when record not found", async () => {
    const app = await buildApp()

    const response = await app.inject({
      method: "PATCH",
      url: `/users/${randUuid()}`,
      payload: { firstName: "Tom" },
    })

    expect(response.statusCode).toEqual(404)
  })
})
