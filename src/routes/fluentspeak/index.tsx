import { createFileRoute } from "@tanstack/react-router";
import { Apple } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/fluentspeak-ai-language-coach/id6760570626";

export const Route = createFileRoute("/fluentspeak/")({
  head: () => ({
    meta: [
      { title: "FluentSpeak - Home" },
      {
        name: "description",
        content:
          "The iOS app that helps you become fluent through immersive AI-powered conversations. Download on the App Store.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-32 text-center">
        <span
          role="img"
          aria-label="FluentSpeak logo"
          className="relative mx-auto inline-grid place-items-center [grid-template-areas:'stack']"
        >
          <img
            src={logoLight}
            alt=""
            aria-hidden
            className="brand-logo-on-dark-bg pointer-events-none col-start-1 row-start-1 h-24 w-24 rounded-3xl shadow-[var(--shadow-elevated)] ring-1 ring-border/60 [grid-area:stack]"
          />
          <img
            src={logoDark}
            alt="FluentSpeak logo"
            className="brand-logo-on-light-bg pointer-events-none col-start-1 row-start-1 h-24 w-24 rounded-3xl shadow-[var(--shadow-elevated)] ring-1 ring-border/60 [grid-area:stack]"
          />
        </span>

        <h1 className="mt-10 font-display text-5xl md:text-7xl font-semibold tracking-tight text-gradient">
          Don't just learn a<br />
          language, speak it.
        </h1>

        <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
          FluentSpeak simulates real-world conversations to help you practice and gain true
          conversational fluency in a language.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-foreground px-6 py-3.5 text-background shadow-[var(--shadow-glow)] motion-safe:transition-colors motion-safe:duration-150 hover:bg-foreground/80 hover:shadow-[var(--shadow-elevated)]"
          >
            <Apple size={22} />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
