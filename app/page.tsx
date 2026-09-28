import { ProjectCarousel } from "@/components/projects/project-carousel";
import { ContactLinks } from "@/components/site/contact-links";
import { Hero } from "@/components/site/hero";
import { SectionHeading } from "@/components/site/section-heading";
import { TopNav } from "@/components/site/top-nav";
import { RESUME_PATH, SECTION_IDS } from "@/lib/site-content";
import styles from "@/styles/layout.module.css";

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <TopNav />
      <main className={styles.main}>
        <section
          id={SECTION_IDS.home}
          className={styles.section}
          aria-labelledby="home-heading"
        >
          <div className="container">
            <Hero />
          </div>
        </section>

        <section
          id={SECTION_IDS.about}
          className={`${styles.section} ${styles.sectionMuted}`}
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className={styles.aboutLayout}>
              <div className={styles.aboutLeft}>
                <p className={styles.eyebrow}>A bit about me</p>
                <h2 id="about-heading" className={styles.aboutHeadline}>Built with care.<br />Made to be used.</h2>
                <p className={styles.aboutCopy}>
                  I&apos;m Huntington, a computer science student and Regents Scholar at UCLA.
                  I like working across the whole product: the interface people see,
                  the data underneath, and all the details in between.
                </p>
                <p className={styles.aboutCopy}>
                  My work spans campus apps, computer vision, and robotics.
                  I care about making useful things feel simple.
                </p>
                <a className={styles.textLink} href={RESUME_PATH} target="_blank" rel="noopener noreferrer">Read my résumé ↗</a>
              </div>
              <div className={styles.aboutRight}>
                <p className={styles.experienceLabel}>Experience & education</p>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>01</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>UCLA Regents Scholar Society</h3>
                    <p className={styles.role}>Software Engineer Intern · Feb 2025–Mar 2026</p>
                    <p className={styles.aboutPrincipleDesc}>Launched an event platform for 100+ students across two UCLA organizations, processing 1,000+ RSVPs and increasing event attendance by 27%.</p>
                  </div>
                </div>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>02</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>Caltech</h3>
                    <p className={styles.role}>Data Science Intern · Nov 2023–Jun 2024</p>
                    <p className={styles.aboutPrincipleDesc}>Analyzed over a decade of USGS weather and aquatic data with Python to explore how extreme weather affects dissolved oxygen.</p>
                  </div>
                </div>
                <div className={styles.aboutPrinciple}>
                  <span className={styles.aboutPrincipleNum}>03</span>
                  <div>
                    <h3 className={styles.aboutPrincipleTitle}>University of California, Los Angeles</h3>
                    <p className={styles.role}>B.S. Computer Science · Expected Dec 2026</p>
                    <p className={styles.aboutPrincipleDesc}>Regents Scholar (top 1.5%). Studying systems, networks, and computer security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={SECTION_IDS.experience} className={styles.section} aria-labelledby="experience-heading">
          <div className="container">
            <SectionHeading id="experience-heading" eyebrow="Recently at AWS" title="Building behind the scenes." />
            <article className={styles.awsPanel}>
              <div className={styles.awsHeading}>
                <div>
                  <p className={styles.awsWordmark}>aws<span aria-hidden="true">↗</span></p>
                  <h3>Amazon Web Services</h3>
                  <p className={styles.role}>Software Engineer Intern · Core Networking Infrastructure</p>
                </div>
                <p className={styles.awsDates}>Jun–Sep 2026<br />Seattle, WA</p>
              </div>
              <p className={styles.awsSummary}>I built and shipped a multi-tenant network automation platform that made internal network operations self-service, with access governed by SSO and IAM.</p>
              <div className={styles.awsMetrics}>
                <div><strong>5+</strong><span>internal teams supported</span></div>
                <div><strong>100+</strong><span>AWS accounts supported</span></div>
                <div><strong>33%</strong><span>lower p99 API latency</span></div>
              </div>
              <ul className={styles.awsDetails}>
                <li>Built a fault-isolated API layer that eliminated partner engineers&apos; need for direct AWS account access across five production environments.</li>
                <li>Reduced p99 latency from 300 ms to 200 ms and removed over 95% of DynamoDB scan overhead with provisioned concurrency and composite indexes.</li>
              </ul>
              <p className={styles.awsStack}>AWS CDK · Lambda · API Gateway · DynamoDB · IAM</p>
            </article>
          </div>
        </section>

        <section
          id={SECTION_IDS.projects}
          className={styles.section}
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <SectionHeading
              id="projects-heading"
              eyebrow="Featured Work"
              title="Things I’ve been building."
              description="Mobile apps, web experiments, and a little robotics."
            />
            <ProjectCarousel />
          </div>
        </section>

        <section
          id={SECTION_IDS.contact}
          className={`${styles.section} ${styles.sectionMuted}`}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className={styles.contactPanel}>
              <SectionHeading
                id="contact-heading"
                eyebrow="Contact"
                title="Have something in mind?"
                description="Reach out for internships, full-time opportunities, or collaboration."
                align="center"
                eyebrowVariant="dash"
              />
              <ContactLinks />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            {currentYear} Huntington Co. Built with Next.js.
          </p>
        </div>
      </footer>
    </>
  );
}
