"use client";

import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MessageSquareText } from "lucide-react";
import { business, contactAnchorId, whatsappHref } from "@/config/business";
import { cn } from "@/lib/utils";

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M19.1 17.6c-.3-.2-1.9-.9-2.2-1s-.5-.2-.8.2c-.2.3-.9 1-.9 1.1-.2.2-.3.2-.6.1s-1.1-.4-2.1-1.2c-.8-.7-1.3-1.5-1.4-1.8s0-.4.1-.5l.5-.6.2-.4c.1-.2 0-.4 0-.5s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 .2.4 2.1 3.1c1.9 2.6 4.6 3.7 6.2 4.1 1.2.3 2.2.2 3 .1.9-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6 0-.2-.2-.3-.5-.4Z" />
      <path d="M16 3.2a12.6 12.6 0 0 0-10.8 19l-1.6 5.7 5.9-1.5A12.6 12.6 0 1 0 16 3.2Zm0 22.9c-2 0-4-.5-5.7-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A10.6 10.6 0 1 1 16 26.1Z" />
    </svg>
  );
}

type FabProps = {
  href?: string;
  label: string;
  icon: ReactNode;
  primary?: boolean;
  onClick?: () => void;
};

function FloatingAction({ href, label, icon, primary = false, onClick }: FabProps) {
  const sharedClass =
    "group relative floating-pulse flex h-14 w-14 items-center justify-center rounded-full shadow-[0_18px_34px_rgba(15,45,82,0.18)] transition duration-200 hover:-translate-y-1 active:translate-y-0";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={cn(
          sharedClass,
          primary
            ? "bg-[#25D366] text-white shadow-[0_18px_34px_rgba(37,211,102,0.28)] hover:bg-[#1fb458]"
            : "border border-brandBlue/10 bg-white text-brandBlue hover:border-brandGold/40 hover:bg-brandCream"
        )}
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        sharedClass,
        primary
          ? "bg-[#25D366] text-white shadow-[0_18px_34px_rgba(37,211,102,0.28)] hover:bg-[#1fb458]"
          : "border border-brandBlue/10 bg-white text-brandBlue hover:border-brandGold/40 hover:bg-brandCream"
      )}
    >
      {icon}
    </button>
  );
}

export function FloatingActions() {
  const pathname = usePathname();
  const router = useRouter();

  function openContact() {
    if (typeof document !== "undefined") {
      const target = document.getElementById(contactAnchorId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    if (pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(`/contact#${contactAnchorId}`);
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <div className="pointer-events-none hidden rounded-full bg-brandBlue px-4 py-2 text-xs font-medium text-white shadow-[0_14px_24px_rgba(15,45,82,0.18)] sm:block">
        Schnell erreichbar: WhatsApp oder Kontakt
      </div>
      <div className="pointer-events-auto flex flex-col gap-3">
        <FloatingAction
          href={whatsappHref}
          label={`WhatsApp an ${business.whatsappNumber}`}
          icon={<WhatsAppGlyph />}
          primary
        />
        <FloatingAction
          label="Zum Kontaktformular"
          icon={<MessageSquareText className="h-5 w-5" />}
          onClick={openContact}
        />
      </div>
    </div>
  );
}
