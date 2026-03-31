import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const getCurrentUserId = cache(async () => {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (user?.id) {
      return user.id;
    }
  } catch {
    // Ignore auth lookup failures and fall back in local development.
  }

  return process.env.LINGORIA_DEMO_USER_ID ?? "demo-learner";
});
