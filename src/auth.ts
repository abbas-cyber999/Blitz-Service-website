import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(8).max(128)
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(rawCredentials) {
        const parsed = credentialsSchema.safeParse(rawCredentials);

        if (!parsed.success) return null;

        const user = await prisma.user.findUnique({
          where: { email: parsed.data.email }
        });

        if (!user?.passwordHash) return null;

        const valid = await compare(parsed.data.password, user.passwordHash);

        if (!valid) return null;

        return user;
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
});