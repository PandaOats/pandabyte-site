"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/site-content";
import { ProjectList } from "./project-list";
import styles from "@/styles/projects.module.css";

const categories = [
  { id: "all", label: "All projects" },
  { id: "phone", label: "Mobile" },
  { id: "desktop", label: "Web & software" },
  { id: "other", label: "Robotics" },
] as const;

export function ProjectCarousel() {
  const [category, setCategory] = useState<string>("all");
  const projects = PROJECTS.filter(project => category === "all" || project.category === category || project.category === "both");
  return (
    <div className={styles.carousel}>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {categories.map(item => <button key={item.id} type="button" aria-pressed={category === item.id}
          className={styles.filter} onClick={() => setCategory(item.id)}>{item.label}</button>)}
      </div>
      <p className={styles.count} role="status">{projects.length} {projects.length === 1 ? "project" : "projects"}</p>
      <ProjectList projects={projects} portfolio />
    </div>
  );
}
