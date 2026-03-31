"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "blitz-privacy-preferences";

type PrivacyPreferences = {
  necessary: true;
  analytics: boolean;
};

const defaultPreferences: PrivacyPreferences = {
  necessary: true,
  analytics: false
};

export function PrivacyPreferencesButton({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<PrivacyPreferences>(defaultPreferences);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return;
    }

    try {
      const parsed = JSON.parse(saved) as PrivacyPreferences;
      setPreferences({
        necessary: true,
        analytics: parsed.analytics === true
      });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  function savePreferences() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          light
            ? "text-left text-sm text-white/72 transition hover:text-[color:var(--accent)]"
            : "text-left text-sm text-slate-600 transition hover:text-brandBlue"
        }
      >
        Datenschutz Präferenzen
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(15,76,129,0.28)] px-4 py-6">
          <div className="surface-card-strong w-full max-w-xl rounded-[30px] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground-muted)]">
                  Datenschutz
                </p>
                <h2 className="mt-3 text-3xl text-[color:var(--foreground)]">
                  Datenschutz Präferenzen
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Präferenzen schließen"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[color:var(--foreground-muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--primary)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-[color:var(--foreground-muted)]">
              Hier können Sie Ihre Datenschutz- und Cookie-Präferenzen verwalten. Technisch
              notwendige Speicherungen bleiben immer aktiv. Optionale Messung ist aktuell nur für
              künftige Erweiterungen vorbereitet und standardmäßig deaktiviert.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-[22px] border border-[var(--border)] bg-white/80 px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[color:var(--foreground)]">
                      Technisch notwendig
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[color:var(--foreground-muted)]">
                      Erforderlich für Grundfunktionen wie Navigation, Formularnutzung und
                      Sicherheit.
                    </p>
                  </div>
                  <span className="rounded-full bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--primary)]">
                    Immer aktiv
                  </span>
                </div>
              </div>

              <label className="flex items-start justify-between gap-4 rounded-[22px] border border-[var(--border)] bg-white/80 px-5 py-4">
                <div>
                  <p className="font-semibold text-[color:var(--foreground)]">
                    Optionale Statistik
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[color:var(--foreground-muted)]">
                    Vorbereitung für zukünftige anonyme Reichweitenmessung. Derzeit standardmäßig
                    deaktiviert.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(event) =>
                    setPreferences((current) => ({
                      ...current,
                      analytics: event.target.checked
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-[var(--border-strong)] text-[color:var(--accent)] focus:ring-[color:var(--accent)]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] hover:bg-[color:var(--secondary)]"
              >
                Schließen
              </button>
              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--primary)] shadow-[0_16px_30px_rgba(212,166,58,0.24)] hover:bg-[#e0b44b]"
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
