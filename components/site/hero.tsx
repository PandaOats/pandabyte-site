import { PandaWindow } from "./panda-window";

import styles from "@/styles/hero.module.css";

export function Hero() {
  return (
    <div className={styles.heroGrid}>
      <div className={styles.copy}>
        <span className={styles.badge}>
          <span className={styles.pulse} />
          Software engineer & curious builder
        </span>
        <h1 id="home-heading" className={styles.title}>
          <span className={styles.intro}>Hi, I&apos;m</span>
          Huntington<span className={styles.accent}> Co.</span>
        </h1>
        <p className={styles.description}>
          Thoughtful interfaces. Dependable systems.
          I build mobile and web products that make everyday things a little easier.
        </p>
        <div className={styles.heroMeta}>
          <span>Regents Scholar @ UCLA</span>
          <span className={styles.metaDot} />
          <span>Previously @ AWS</span>
          <span className={styles.metaDot} />
          <span>Los Angeles, CA</span>
        </div>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryAction}>
            View Projects →
          </a>
          <a href="#contact" className={styles.secondaryAction}>
            Get in touch
          </a>

        </div>
      </div>

      <PandaWindow />
    </div>
  );
}
