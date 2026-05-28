import { Moon, Sun } from "lucide-react";

/** Keep in sync with inline script in __root.tsx (THEME_INIT_SCRIPT). */
export const THEME_STORAGE_KEY = "theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("light");
    const isLight = root.classList.contains("light");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isLight ? "light" : "dark");
    } catch {
      /* ignore quota / private mode */
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light or dark theme"
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-foreground motion-safe:transition-colors hover:bg-accent"
    >
      <span className="relative grid place-items-center [grid-template-areas:'stack'] size-4">
        <span className="theme-toggle-show-dark-mode col-start-1 row-start-1 place-items-center [grid-area:stack] grid">
          <Sun size={16} aria-hidden />
        </span>
        <span className="theme-toggle-show-light-mode col-start-1 row-start-1 place-items-center [grid-area:stack] grid">
          <Moon size={16} aria-hidden />
        </span>
      </span>
    </button>
  );
}
