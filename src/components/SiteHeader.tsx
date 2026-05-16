import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const links = [
  { to: "/fluentspeak", label: "Home" },
  { to: "/fluentspeak/about", label: "About" },
  { to: "/fluentspeak/contact", label: "Contact" },
  { to: "/fluentspeak/privacy", label: "Privacy" },
  { to: "/fluentspeak/terms", label: "Terms" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/fluentspeak" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span
            role="img"
            aria-label="FluentSpeak logo"
            className="relative inline-grid shrink-0 place-items-center [grid-template-areas:'stack']"
          >
            <img
              src={logoLight}
              alt=""
              aria-hidden
              className="brand-logo-on-dark-bg pointer-events-none col-start-1 row-start-1 h-8 w-8 rounded-lg [grid-area:stack]"
            />
            <img
              src={logoDark}
              alt="FluentSpeak logo"
              className="brand-logo-on-light-bg pointer-events-none col-start-1 row-start-1 h-8 w-8 rounded-lg [grid-area:stack]"
            />
          </span>
          FluentSpeak
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="text-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 bg-background/95 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
