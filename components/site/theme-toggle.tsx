"use client";

import { useSyncExternalStore } from "react";
import styles from "@/styles/nav.module.css";

const STORAGE_KEY = "pandabyte-theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  const syncTabs = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      document.documentElement.dataset.theme = event.newValue === "dark" ? "dark" : "light";
    }
  };
  window.addEventListener("storage", syncTabs);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", syncTabs);
  };
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe,
    () => document.documentElement.dataset.theme === "dark",
    () => false);

  function toggle() {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* Still works when storage is unavailable. */ }
  }

  return (
    <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode"
      className={styles.themeToggle} onClick={toggle}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
      </svg>
      <span className={styles.switchTrack} aria-hidden="true"><span /></span>
    </button>
  );
}
