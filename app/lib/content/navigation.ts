import type { NavId } from "@/app/i18n/types";

export const navLinks: { id: NavId; href: string }[] = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "services", href: "#services" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
];

export const marqueeItems = [
  "React.js",
  "React Native",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Zustand",
  "Expo",
  "HTML / CSS",
  "Git",
  "REST APIs",
  "Responsive Design",
] as const;

