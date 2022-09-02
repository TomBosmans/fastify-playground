import prisma from "./src/app/prisma"
import { truncateDB } from "./src/utils/truncateDb"

afterEach(async () => await truncateDB(prisma))
