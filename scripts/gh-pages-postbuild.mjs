/**
 * GitHub Pages post-build: SPA fallback + disable Jekyll on user/org sites.
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const appIndex = join(outDir, "fluentspeak", "index.html");

if (!existsSync(appIndex)) {
  console.error("gh-pages-postbuild: dist/client/fluentspeak/index.html not found. Run build:gh-pages.");
  process.exit(1);
}

// SPA fallback: serve the FluentSpeak shell so client routing can handle deep links
copyFileSync(appIndex, join(outDir, "404.html"));

// Required when deploying folders starting with _ (and general GH Pages static hosting)
writeFileSync(join(outDir, ".nojekyll"), "");

console.log("gh-pages-postbuild: wrote 404.html and .nojekyll");
