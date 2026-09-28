import Link from "next/link";

import type { ProjectItem } from "@/lib/site-content";
import styles from "@/styles/overlay.module.css";
import { ProjectChip } from "./project-chip";

interface ProjectListProps {
  projects: ProjectItem[];
  onProjectSelect?: () => void;
}

function isExternalUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function ProjectList({ projects, onProjectSelect }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <p className={styles.emptyState}>
        No projects are assigned to this category yet.
      </p>
    );
  }

  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <article key={project.slug} className={styles.projectItem}>
          <header className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <span
              className={`${styles.statusBadge} ${
                project.status === "live" ? styles.live : styles.comingSoon
              }`}
            >
              {project.status === "live" ? "Live" : "Coming Soon"}
            </span>
          </header>

          <p className={styles.projectSummary}>{project.summary}</p>

          <div className={styles.chipRow}>
            {project.tech.map((tech) => (
              <ProjectChip key={`${project.slug}-${tech}`} label={tech} />
            ))}
          </div>

          <div className={styles.actionRow}>
            <Link
              href={project.links.route}
              className={styles.projectLink}
              onClick={onProjectSelect}
            >
              View Project
            </Link>
            {project.links.demoUrl ? (
              isExternalUrl(project.links.demoUrl) ? (
                <a
                  href={project.links.demoUrl}
                  className={styles.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onProjectSelect}
                >
                  Demo
                </a>
              ) : (
                <Link
                  href={project.links.demoUrl}
                  className={styles.secondaryLink}
                  onClick={onProjectSelect}
                >
                  Demo
                </Link>
              )
            ) : null}
            {project.links.repoUrl ? (
              <a
                href={project.links.repoUrl}
                className={styles.secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onProjectSelect}
              >
                Repo
              </a>
            ) : null}
            {project.links.architectureUrl ? (
              isExternalUrl(project.links.architectureUrl) ? (
                <a
                  href={project.links.architectureUrl}
                  className={styles.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onProjectSelect}
                >
                  Architecture
                </a>
              ) : (
                <Link
                  href={project.links.architectureUrl}
                  className={styles.secondaryLink}
                  onClick={onProjectSelect}
                >
                  Architecture
                </Link>
              )
            ) : null}
            {project.links.termsRoute ? (
              <Link
                href={project.links.termsRoute}
                className={styles.secondaryLink}
                onClick={onProjectSelect}
              >
                Terms of Service
              </Link>
            ) : null}
            {project.links.privacyRoute ? (
              project.links.privacyRoute.endsWith(".html") ? (
                <a
                  href={project.links.privacyRoute}
                  className={styles.secondaryLink}
                  onClick={onProjectSelect}
                >
                  Privacy Policy
                </a>
              ) : (
                <Link
                  href={project.links.privacyRoute}
                  className={styles.secondaryLink}
                  onClick={onProjectSelect}
                >
                  Privacy Policy
                </Link>
              )
            ) : null}
            {project.links.deleteAccountRoute ? (
              <Link
                href={project.links.deleteAccountRoute}
                className={styles.secondaryLink}
                onClick={onProjectSelect}
              >
                Delete Account
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
