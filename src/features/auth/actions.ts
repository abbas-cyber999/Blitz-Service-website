"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { hasSupabaseEnv } from "@/lib/env";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type AuthActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const authSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters.")
});

const signupSchema = authSchema.extend({
  fullName: z.string().min(2, "Enter your full name.")
});

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function loginAction(_: AuthActionState, formData: FormData): Promise<AuthActionState> {
  if (!hasSupabaseEnv()) {
    return {
      status: "error",
      message: "Supabase environment variables are missing."
    };
  }

  const parsed = authSchema.safeParse({
    email: getFieldValue(formData, "email"),
    password: getFieldValue(formData, "password")
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message
    };
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return {
      status: "error",
      message: error.message
    };
  }

  redirect("/dashboard");
}

export async function signupAction(_: AuthActionState, formData: FormData): Promise<AuthActionState> {
  if (!hasSupabaseEnv()) {
    return {
      status: "error",
      message: "Supabase environment variables are missing."
    };
  }

  const parsed = signupSchema.safeParse({
    fullName: getFieldValue(formData, "fullName"),
    email: getFieldValue(formData, "email"),
    password: getFieldValue(formData, "password")
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message
    };
  }

  const supabase = await createServerSupabaseClient();
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const { error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        full_name: parsed.data.fullName
      },
      emailRedirectTo: `${origin}/auth/callback`
    }
  });

  if (error) {
    return {
      status: "error",
      message: error.message
    };
  }

  redirect("/onboarding");
}
