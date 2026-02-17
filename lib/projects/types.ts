/**
 * Detail page type for projects.
 * - designer: Product Manager, UI/UX Designer → case study / design portfolio view
 * - developer: Frontend, Backend, Hardware, Product Engineering Manager, etc. → dev/engineering view
 * - fullstack: UI/UX + Frontend + Backend → combined case study (design + engineering)
 */
export type ProjectDetailType = "designer" | "developer" | "fullstack";

/** Categories that use the designer-style detail page */
export const DESIGNER_CATEGORIES = [
  "UI/UX Design",
  "Product Design",
  "Branding",
  "Product Manager",
  "Brand Strategy",
] as const;

/** Categories that use the developer-style detail page (all others) */
export type DeveloperCategory = string; // Frontend, Backend, Fullstack, Hardware, etc.

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  /** Which detail page layout to use */
  detailType: ProjectDetailType;
  /** Filter id(s) for SelectedWorks. Use an array for fullstack so project appears in both UI and Backend (e.g. ["ui", "backend"]). */
  filter: ProjectFilterId | ProjectFilterId[];
  /** Optional badge label (e.g. "Work experience") shown on the project card */
  badge?: string;
  /** Optional short list of core stacks (3–4) for card preview */
  stackPreview?: string[];
}

export type ProjectFilterId = "ui" | "backend" | "hardware" | "fullstack" | "other";
