import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <AuthShell eyebrow="الدخول" title="عد إلى التعلّم" description="صفحة دخول هادئة وبسيطة للمبتدئ العربي.">
      <LoginForm />
    </AuthShell>
  );
}
