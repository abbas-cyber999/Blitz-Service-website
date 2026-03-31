import { signupAction } from "@/features/auth/actions";
import { AuthFormFrame } from "@/components/auth/auth-form-frame";

export function SignupForm() {
  return (
    <AuthFormFrame
      title="إنشاء حساب"
      description="ابدأ مسارك لتعلّم الإنجليزية بواجهة عربية واضحة."
      action={signupAction}
      fields={[
        { name: "fullName", label: "الاسم الكامل", type: "text", autoComplete: "name" },
        { name: "email", label: "البريد الإلكتروني", type: "email", autoComplete: "email" },
        { name: "password", label: "كلمة المرور", type: "password", autoComplete: "new-password" }
      ]}
      submitLabel="إنشاء الحساب"
      footerText="لديك حساب بالفعل؟"
      footerLinkLabel="دخول"
      footerHref="/login"
    />
  );
}
