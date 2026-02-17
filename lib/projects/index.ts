import type { Project } from "./types";
import { PROJECTS } from "./constants";

export type { Project, ProjectDetailType } from "./types";
export { PROJECTS, getDetailType, slugify } from "./constants";

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjects(): Project[] {
  return PROJECTS;
}
