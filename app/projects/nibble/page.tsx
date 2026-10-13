import Link from "next/link";
import type { Metadata } from "next";

import styles from "@/styles/nibble.module.css";

export const metadata: Metadata = {
  title: "Nibble — UCLA Dining Simplified | Pandabyte",
  description:
    "Nibble is a Bruin dining companion that filters every dining hall menu by what you actually eat — vegan, halal, gluten-free, allergy-aware — in one tap.",
};

const FEATURES = [
  {
    n: "01",
    title: "Preference-aware filtering",
    body: "Saved dietary preferences narrow every menu in one tap — vegan, halal, gluten-free, peanut-free.",
  },
  {
    n: "02",
    title: "Menus in one place",
    body: "Browse dining halls and food trucks by meal period, then open a dish for ingredients, nutrition, and dietary labels.",
  },
  {
    n: "03",
    title: "Favorites and alerts",
    body: "Save favorite dishes and choose which notification categories are enabled.",
  },
];

const SPECS = [
  { k: "Platforms", v: "iPhone · iPad" },
  { k: "Menus", v: "Halls + trucks" },
  { k: "Planning", v: "Groups + votes" },
  { k: "Social", v: "Friends + chat" },
];

function PhoneMock() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneScreen}>
        <div className={styles.nibbleApp}>
          <div className={styles.appTop}>
            <div>
              <div className={styles.greeting}>Tuesday · lunch</div>
              <div className={styles.nameHeader}>Hey, Huntington</div>
            </div>
            <div className={styles.avatar}>H</div>
          </div>
          <div className={styles.appBody}>
            <div className={styles.searchBar}>
              <span>⌕</span>
              <span>Search De Neve, BPlate…</span>
            </div>
            <div className={styles.chips}>
              <span className={`${styles.chip} ${styles.chipOn}`}>Vegan</span>
              <span className={styles.chip}>Halal</span>
              <span className={styles.chip}>GF</span>
              <span className={styles.chip}>Nuts</span>
            </div>
            <div className={styles.appSectionTitle}>Matches at BPlate</div>
            <div className={styles.mealList}>
              <div className={styles.meal}>
                <div className={`${styles.mealImg} ${styles.mealImgA}`} />
                <div>
                  <div className={styles.mealName}>Tofu Banh Mi Bowl</div>
                  <div className={styles.mealSub}>Brown rice · pickled veg</div>
                </div>
                <span className={styles.mealTag}>vegan</span>
              </div>
              <div className={styles.meal}>
                <div className={`${styles.mealImg} ${styles.mealImgB}`} />
                <div>
                  <div className={styles.mealName}>Charred Broccolini</div>
                  <div className={styles.mealSub}>Lemon · chili oil · sesame</div>
                </div>
                <span className={styles.mealTag}>vegan</span>
              </div>
              <div className={styles.meal}>
                <div className={`${styles.mealImg} ${styles.mealImgC}`} />
                <div>
                  <div className={styles.mealName}>Coconut Curry Lentils</div>
                  <div className={styles.mealSub}>Basmati · cilantro · lime</div>
                </div>
                <span className={styles.mealTag}>vegan</span>
              </div>
            </div>
          </div>
          <div className={styles.appTabs}>
            {["Today", "Halls", "Saved", "You"].map((tab, i) => (
              <div key={tab} className={`${styles.tab} ${i === 0 ? styles.tabActive : ""}`}>
                <div className={styles.tabIcon} />
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenToday() {
  return (
    <div className={styles.screenInner}>
      <div className={styles.screenSmall}>Tuesday · lunch</div>
      <div className={styles.screenTitle}>Today, 38 matches</div>
      <div className={styles.screenList}>
        {["Tofu Banh Mi", "Lentil Curry", "Charred Broccolini", "Mushroom Pho"].map((m) => (
          <div key={m} className={styles.screenItem}>
            <div>
              <div className={styles.screenItemName}>{m}</div>
              <div className={styles.screenItemSub}>BPlate · vegan</div>
            </div>
            <span className={styles.screenArrow}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenFilters() {
  const filters: [string, boolean][] = [
    ["Vegan", true], ["Vegetarian", true], ["Halal", false],
    ["Gluten free", true], ["Peanut free", true], ["Dairy free", false],
  ];
  return (
    <div className={styles.screenInner}>
      <div className={styles.screenTitle}>Diet</div>
      <div className={styles.screenList}>
        {filters.map(([k, on]) => (
          <div key={k} className={styles.screenFilterItem}>
            <span className={styles.screenFilterLabel}>{k}</span>
            <span className={`${styles.toggle} ${on ? styles.toggleOn : ""}`}>
              <span className={styles.toggleThumb} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenHall() {
  return (
    <div className={styles.screenInner}>
      <div className={styles.screenSmall}>Dining hall</div>
      <div className={styles.screenTitle}>Epicuria</div>
      <div className={styles.screenSmall} style={{ marginBottom: "0.75rem" }}>Open · until 9 pm</div>
      <div className={styles.screenList}>
        {["Pasta Bar — fresh", "Pizza al Forno", "Antipasto", "Tiramisu"].map((m, i) => (
          <div key={m} className={styles.screenHallItem}>
            <div className={styles.screenItemName}>{m}</div>
            <div className={styles.screenItemSub}>{i % 2 ? "Vegetarian" : "Contains gluten"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NibblePage() {
  return (
    <main className={styles.page}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <Link href="/#projects" className={styles.backLink}>
                ← Back to projects
              </Link>
              <span className={styles.nibbleMark}>
                <span className={styles.swatch} />
                <span className={styles.nibbleMarkLabel}>
                  Nibble · UCLA dining, simplified
                </span>
              </span>
              <h1 className={styles.heroTitle}>
                Eat what fits
                <br />
                your{" "}
                <span className={styles.accentWord}>diet</span>.
              </h1>
              <p className={styles.heroDesc}>
                Nibble is a Bruin dining companion that filters every dining
                hall menu by what you actually eat — vegan, halal,
                gluten&#8209;free, allergy&#8209;aware — in one tap. Save
                favorites and coordinate meals with friends.
              </p>
              <div className={styles.heroActions}>
                <a
                  href="https://apps.apple.com/us/app/nibble-bruin-dining/id6764253308"
                  className={styles.btnPrimary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for iOS ↗
                </a>
                <Link href="#case-study" className={styles.btnGhost}>
                  Read case study
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span>Available on iPhone</span>
                <span className={styles.metaDot} />
                <span>Free</span>
                <span className={styles.metaDot} />
                <span>Made by a Bruin</span>
              </div>
            </div>
            <div className={styles.heroPhone}>
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs ───────────────────────────────────── */}
      <section className={styles.specsSection}>
        <div className={styles.container}>
          <div className={styles.specsGrid}>
            {SPECS.map((s) => (
              <div key={s.k} className={styles.spec}>
                <div className={styles.specKey}>{s.k}</div>
                <div className={styles.specVal}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>What it does</p>
          <h2 className={styles.sectionTitle}>Three things, done well.</h2>
          <p className={styles.sectionLede}>
            Menus, favorites, friends, group chat, and meal planning in one app.
          </p>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.n} className={styles.featureCard}>
                <div className={styles.featureNum}>{f.n}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screens ─────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Screens</p>
          <h2 className={styles.sectionTitle}>A walk through the app.</h2>
          <p className={styles.sectionLede}>Illustrations of the Nibble app experience.</p>
          <div className={styles.screenGrid}>
            {[
              { label: "01 · Today", content: <ScreenToday /> },
              { label: "02 · Filters", content: <ScreenFilters /> },
              { label: "03 · Hall", content: <ScreenHall /> },
            ].map((s) => (
              <div key={s.label} className={styles.screenShot}>
                {s.content}
                <div className={styles.screenLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study ──────────────────────────────── */}
      <section id="case-study" className={styles.section}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Case study</p>
          <h2 className={styles.sectionTitle}>How it was built.</h2>
          <div className={styles.caseGrid}>
            <div>
              <h3 className={styles.caseH3}>Stack</h3>
              <p className={styles.caseCopy}>
                React Native + Expo · TypeScript · Supabase auth &amp; data ·
                Expo notifications and image picker.
              </p>
              <h3 className={styles.caseH3}>Highlights</h3>
              <p className={styles.caseCopy}>
                Preference-aware filtering · favorites and meal planning.
              </p>
            </div>
            <div>
              <h3 className={styles.caseH3}>Problem</h3>
              <p className={styles.caseCopy}>
                Bruins were checking three different menu sources, parsing
                inconsistent ingredient labels, and re-applying their dietary
                constraints every meal. Decision fatigue, three times a day.
              </p>
              <h3 className={styles.caseH3}>Solution</h3>
              <p className={styles.caseCopy}>
                Nibble consolidates every hall&apos;s menu into one
                mobile-first flow. Saved preferences narrow the list
                automatically, while favorites, groups, and meal plans help
                students decide where and when to eat.
              </p>
              <h3 className={styles.caseH3}>Architecture</h3>
              <p className={styles.caseCopy}>
                The TypeScript client uses React Native and Expo. Supabase
                backs authentication, menus, social features, and storage. A
                scheduled ingestion job normalizes menu feeds before the
                client reads them.
              </p>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a
              href="https://apps.apple.com/us/app/nibble-bruin-dining/id6764253308"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Nibble ↗
            </a>
            <Link href="/#projects" className={styles.btnGhost}>
              ← Back to PandaByte
            </Link>
            <a href="/privacy/nibble_policy.html" className={styles.btnSecondary}>
              Privacy Policy
            </a>
            <Link href="/projects/nibble/delete-account" className={styles.btnSecondary}>
              Delete Account
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} Huntington Co. Built with Next.js.
          </p>
          <p className={styles.footerText}>pandabyte.dev</p>
        </div>
      </footer>
    </main>
  );
}
