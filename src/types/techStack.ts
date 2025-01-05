import { 
  SiTypescript, SiPython, SiReact, SiNextdotjs, 
  SiNodedotjs, SiPostgresql, SiFlutter, SiFirebase,
  SiGit, SiAmazon, SiGithub, SiJavascript,
  SiTailwindcss, SiExpress, SiFigma, SiAdobexd
} from 'react-icons/si';

export interface TechCategory {
  title: string;
  color: string;
  skills: Array<{
    name: string;
    Icon: React.ComponentType<any>;
  }>;
}

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    color: "#498FD8",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss }
    ]
  },
  {
    title: "Backend",
    color: "#D86089",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Firebase", Icon: SiFirebase }
    ]
  },
  {
    title: "Cloud",
    color: "#FB9D5B",
    skills: [
      { name: "AWS", Icon: SiAmazon },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub }
    ]
  },
  {
    title: "Design",
    color: "#DDCCD0",
    skills: [
      { name: "Figma", Icon: SiFigma },
      { name: "Adobe XD", Icon: SiAdobexd }
    ]
  }
]; 