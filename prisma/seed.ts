// prisma/seed.ts
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Hash admin password
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync("admin", salt)

  // Create admin user
  await prisma.user.upsert({
    where: { email: "sannyeinphyo@gmail.com" },
    update: {},
    create: {
      email: "sannyeinphyo@gmail.com",
      username: "admin",
      name: "San Nyein Phyo",
      password: hashedPassword,
      role: "ADMIN",
    },
  })

  console.log("✅ Admin user seeded successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
