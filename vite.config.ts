// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** GitHub Pages project site: https://<user>.github.io/fluentspeak/ */
const GITHUB_PAGES = process.env.GITHUB_PAGES === "true";
const GITHUB_PAGES_BASE = "/fluentspeak/";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: GITHUB_PAGES ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
    ...(GITHUB_PAGES
      ? {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
            failOnError: true,
            // Crawl can pick up /fluentspeak/* hrefs (vite base prefix); real pages are /, /about, …
            filter: ({ path }) => !/^\/fluentspeak\//.test(path),
          },
        }
      : {}),
  },
  vite: {
    base: GITHUB_PAGES ? GITHUB_PAGES_BASE : "/",
  },
});
