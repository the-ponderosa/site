#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";

async function main() {
  const outDir = process.argv[2];
  const baseUrl = process.argv[3];

  if (!outDir || !baseUrl) {
    console.error(
      "Usage: node scripts/ci/playwright-screenshots.mjs <artifact_dir> <base_url>"
    );
    process.exit(2);
  }

  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  async function cap({ name, url, width, height }) {
    await page.setViewportSize({ width, height });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15_000 });
    await page.waitForTimeout(600);

    const outPath = path.join(outDir, name);
    await page.screenshot({ path: outPath, fullPage: true });

    const bytes = fs.statSync(outPath).size;
    if (bytes < 5_000) {
      throw new Error(`Suspiciously small screenshot for ${name} (${bytes} bytes)`);
    }
  }

  const shots = [
    { name: "desktop-home.png", url: `${baseUrl}/`, width: 1440, height: 900 },
    { name: "mobile-home.png", url: `${baseUrl}/`, width: 390, height: 844 },
  ];

  for (const s of shots) {
    console.log(`[shot] ${s.name}`);
    await cap(s);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
