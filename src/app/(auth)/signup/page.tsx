import { AuthShell } from "@/components/auth/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <AuthShell eyebrow="إنشاء حساب" title="ابدأ بسهولة" description="أنشئ حسابك ثم ابدأ أول درس في الإنجليزية.">
      <SignupForm />
    </AuthShell>
  );
}
