import { NAV_ITEMS, SECTION_IDS } from "@/lib/site-content";
import styles from "@/styles/nav.module.css";

function isExternalLink(href: string, forceExternal?: boolean) {
  if (forceExternal) {
    return true;
  }

  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf")
  );
}

export function TopNav() {
  return (
    <header className={styles.wrapper}>
      <div className="container">
        <nav className={styles.nav} aria-label="Primary">
          <a href={`#${SECTION_IDS.home}`} className={styles.brand} aria-label="PandaByte home">
            P
          </a>
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => {
              const external = isExternalLink(item.href, item.external);

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      item.label === "Resume" ? styles.resumeLink : styles.link
                    }
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
