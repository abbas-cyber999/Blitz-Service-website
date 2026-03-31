import { loginAction } from "@/features/auth/actions";
import { AuthFormFrame } from "@/components/auth/auth-form-frame";

export function LoginForm() {
  return (
    <AuthFormFrame
      title="تسجيل الدخول"
      description="ادخل إلى حسابك لتتابع من حيث توقفت."
      action={loginAction}
      fields={[
        { name: "email", label: "البريد الإلكتروني", type: "email", autoComplete: "email" },
        { name: "password", label: "كلمة المرور", type: "password", autoComplete: "current-password" }
      ]}
      submitLabel="دخول"
      footerText="ليس لديك حساب؟"
      footerLinkLabel="أنشئ حسابًا"
      footerHref="/signup"
    />
  );
}
