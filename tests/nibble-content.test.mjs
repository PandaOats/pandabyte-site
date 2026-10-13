import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const PRODUCT_PAGE = new URL("../app/projects/nibble/page.tsx", import.meta.url);
const SITE_CONTENT = new URL("../lib/site-content.ts", import.meta.url);

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nibble-bruin-dining/id6764253308";

test("Nibble marketing copy only makes source-supported product claims", async () => {
  const copy = await Promise.all([
    readFile(PRODUCT_PAGE, "utf8"),
    readFile(SITE_CONTENT, "utf8"),
  ]).then((files) => files.join("\n"));

  const unsupportedClaims = [
    /local[‑-]first/i,
    /offline reads?/i,
    /<\s*1\.2s/i,
    /react query/i,
    /sentry/i,
    /expo ota/i,
    /no social feed/i,
    /typed (?:api )?boundar/i,
  ];

  for (const claim of unsupportedClaims) {
    assert.doesNotMatch(copy, claim);
  }
});

test("every Nibble App Store call to action uses the verified listing", async () => {
  const productPage = await readFile(PRODUCT_PAGE, "utf8");
  const links = productPage.match(/https:\/\/apps\.apple\.com[^\"\s]*/g) ?? [];

  assert.equal(links.length, 2);
  assert.deepEqual(links, [APP_STORE_URL, APP_STORE_URL]);
});
