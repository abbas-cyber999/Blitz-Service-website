import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getSeedAdminEmail, getSeedAdminPassword } from "@/lib/env";

async function main() {
  const email = getSeedAdminEmail().toLowerCase();
  const passwordHash = await hash(getSeedAdminPassword(), 12);

  await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: "ADMIN"
    },
    create: {
      email,
      name: "DeutschHero Admin",
      passwordHash,
      role: "ADMIN",
      targetLanguageCode: "de"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
