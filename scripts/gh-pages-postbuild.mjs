/**
 * GitHub Pages SPA fallback: serve index.html for unknown paths so client routing works.
 */
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const indexHtml = join(outDir, "index.html");

if (!existsSync(indexHtml)) {
  console.error("gh-pages-postbuild: dist/client/index.html not found. Enable prerender in vite.config.ts.");
  process.exit(1);
}

copyFileSync(indexHtml, join(outDir, "404.html"));
console.log("gh-pages-postbuild: wrote dist/client/404.html");
