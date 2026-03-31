"use client";

import { Moon, SunMedium } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return (document.documentElement.dataset.theme as Theme | undefined) ?? "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("lingoria-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={toggleTheme}
      className="h-11 w-11 rounded-full px-0"
      aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </Button>
  );
}
