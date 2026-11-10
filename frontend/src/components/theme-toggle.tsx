
"use client";

import { useTheme } from "@wrksz/themes/client";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      disabled={!resolvedTheme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        !resolvedTheme
          ? "Change theme"
          : `Switch to ${isDark ? "light" : "dark"} mode`
      }
      title={
        !resolvedTheme
          ? "Change theme"
          : `Switch to ${isDark ? "light" : "dark"} mode`
      }
      className="flex h-10 w-10 items-center justify-center rounded-xl
        border border-[var(--border)] transition
        hover:bg-[var(--surface)] disabled:cursor-wait"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
