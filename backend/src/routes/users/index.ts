import { FastifyInstance } from "fastify"
import { getUserRoute } from "./getUser/route"
import { getUsersRoute } from "./getUsers/route"
import { patchUsersRoute } from "./patchUsers/route"
import { postUserRoute } from "./postUsers/route"

export async function usersRoutes(app: FastifyInstance) {
  getUsersRoute(app)
  getUserRoute(app)
  postUserRoute(app)
  patchUsersRoute(app)
}
