import { AppShell } from "@/components/dashboard/app-shell";

export default function ProductLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell>{children}</AppShell>;
}
