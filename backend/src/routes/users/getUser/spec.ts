import { randUuid } from "@ngneat/falso"
import { buildApp } from "../../../app/buildApp"
import { userSchema } from "../../../models/user.schema"

describe("GET /users/:id", () => {
  it("responds 200", async () => {
    const app = await buildApp()

    const data = userSchema.parse({ id: randUuid() })
    const { id } = await app.db.user.create({ data })

    const response = await app.inject({
      method: "GET",
      url: `/users/${id}`,
    })

    expect(response.statusCode).toEqual(200)
  })

  it("responds 400 with invalid :id", async () => {
    const app = await buildApp()

    const response = await app.inject({
      method: "GET",
      url: "/users/123",
    })

    expect(response.statusCode).toEqual(400)
  })

  it("responds 404 when record not found", async () => {
    const app = await buildApp()

    const response = await app.inject({
      method: "GET",
      url: `/users/${randUuid()}`
    })

    expect(response.statusCode).toEqual(404)
  })
})
