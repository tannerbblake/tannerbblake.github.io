/**
 * GitHub Pages post-build: SPA fallback + disable Jekyll on user/org sites.
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const appIndex = join(outDir, "fluentspeak", "index.html");
const appAdsSource = join(process.cwd(), "public", "fluentspeak", "app-ads.txt");
const appAdsDest = join(outDir, "fluentspeak", "app-ads.txt");

if (!existsSync(appIndex)) {
  console.error("gh-pages-postbuild: dist/client/fluentspeak/index.html not found. Run build:gh-pages.");
  process.exit(1);
}

if (!existsSync(appAdsSource)) {
  console.error("gh-pages-postbuild: public/fluentspeak/app-ads.txt not found.");
  process.exit(1);
}

// AdMob crawlers need plain text at /fluentspeak/app-ads.txt (must not be SPA HTML)
copyFileSync(appAdsSource, appAdsDest);

// SPA fallback: serve the FluentSpeak shell so client routing can handle deep links
copyFileSync(appIndex, join(outDir, "404.html"));

// Required when deploying folders starting with _ (and general GH Pages static hosting)
writeFileSync(join(outDir, ".nojekyll"), "");

console.log("gh-pages-postbuild: wrote 404.html, .nojekyll, and fluentspeak/app-ads.txt");
