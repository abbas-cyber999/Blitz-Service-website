"use server";

import { AuthError } from "next-auth";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";

export type AuthActionState = {
  error: string | null;
};

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address.").trim().toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters."),
  redirectTo: z.string().trim().optional()
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(80),
  email: z.string().email("Enter a valid email address.").trim().toLowerCase(),
  password: z.string().min(8, "Password must be at least 8 characters.").max(128),
  redirectTo: z.string().trim().optional()
});

const initialState: AuthActionState = {
  error: null
};

function getRedirectTarget(redirectTo?: string) {
  if (!redirectTo || !redirectTo.startsWith("/")) {
    return "/dashboard";
  }

  return redirectTo;
}

export async function loginAction(
  _previousState: AuthActionState = initialState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: formData.get("redirectTo")
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Unable to sign in."
    };
  }

  try {
    const result = await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false
    });

    if (result?.error) {
      return {
        error:
          result.error === "CredentialsSignin"
            ? "Incorrect email or password."
            : "Unable to sign in right now."
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: error.type === "CredentialsSignin" ? "Incorrect email or password." : "Unable to sign in right now."
      };
    }

    throw error;
  }

  redirect(getRedirectTarget(parsed.data.redirectTo));
}

export async function registerAction(
  _previousState: AuthActionState = initialState,
  formData: FormData
): Promise<AuthActionState> {
  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: formData.get("redirectTo")
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Unable to create your account."
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: parsed.data.email
    }
  });

  if (existingUser) {
    return {
      error: "An account with this email already exists."
    };
  }

  const passwordHash = await hash(parsed.data.password, 12);

  const createdUser = await prisma.user.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash,
      role: "USER",
      targetLanguageCode: "de"
    }
  });

  if (!createdUser.id || !createdUser.passwordHash) {
    return {
      error: "Account creation failed before sign-in."
    };
  }

  try {
    const result = await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirect: false
    });

    if (result?.error) {
      return {
        error:
          result.error === "CredentialsSignin"
            ? "Your account was created, but automatic sign-in failed. Please sign in manually."
            : "Your account was created, but sign-in could not be completed."
      };
    }
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: "Your account was created, but automatic sign-in failed. Please sign in manually."
      };
    }

    throw error;
  }

  redirect(getRedirectTarget(parsed.data.redirectTo));
}

export async function logoutAction() {
  await signOut({
    redirectTo: "/"
  });
}
