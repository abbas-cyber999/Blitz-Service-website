import Image from "next/image";
import type { Metadata } from "next";
import { Bell, CalendarDays } from "lucide-react";
import { MarketingFooter } from "@/components/navigation/marketing-footer";
import { MarketingNavbar } from "@/components/navigation/marketing-navbar";
import { Container } from "@/components/ui/container";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Aktuelle Meldungen von Blitz Service GmbH zu Angeboten, neuen Leistungen und Unternehmens-Updates."
};

export default function NewsPage() {
  return (
    <div className="relative overflow-hidden">
      <MarketingNavbar />
      <main id="main-content" className="py-10 md:py-16">
        <Container className="space-y-8">
          <section className="surface-card-strong rounded-[42px] p-6 md:p-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-4 py-2 text-sm font-semibold text-[color:var(--primary)]">
                <Bell className="h-4 w-4 text-[color:var(--accent)]" />
                Aktuelle Meldungen
              </div>
              <h1 className="mt-5 text-5xl leading-tight text-[color:var(--foreground)] md:text-6xl">
                News & Updates
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--foreground-muted)] md:text-lg">
                Hier finden Sie kompakte Hinweise zu neuen Leistungen, besonderen Angeboten,
                Projekt-Highlights und aktuellen Entwicklungen bei Blitz Service GmbH.
              </p>
            </div>
          </section>

          <section className="grid gap-6">
            {newsItems.map((item) => (
              <article key={`${item.title}-${item.date}`} className="news-card">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--secondary)] px-3 py-1.5 text-sm font-medium text-[color:var(--foreground-muted)]">
                        <CalendarDays className="h-4 w-4 text-[color:var(--accent)]" />
                        {item.date}
                      </span>
                      {item.unread ? (
                        <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1.5 text-sm font-semibold text-red-600">
                          Neu
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-5 text-2xl text-[color:var(--foreground)] md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[color:var(--foreground-muted)]">
                      {item.text}
                    </p>
                  </div>

                  {item.image ? (
                    <div className="news-card-media">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 28vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </section>
        </Container>
      </main>
      <MarketingFooter />
    </div>
  );
}
