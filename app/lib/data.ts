import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Palette,
  GitBranch,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Hero ────────────────────────────────────────────────────

export const stats = [
  { value: "2+", label: "Years in\nDevelopment" },
  { value: "3", label: "Companies\nWorked At" },
  { value: "30%", label: "Admin Time\nReduced" },
] as const;

// ── Marquee ─────────────────────────────────────────────────

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

// ── Experience ──────────────────────────────────────────────

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "WEGAMERS",
    period: "Nov 2025 – Present",
    description:
      "Sole frontend developer handling the complete frontend architecture, UI implementation, and feature delivery for a gaming startup.",
  },
  {
    role: "Frontend Developer",
    company: "Novatori",
    period: "May 2024 – Present",
    description:
      "Building web interfaces with React, developing responsive and interactive components, integrating APIs, and collaborating in a hybrid team environment.",
  },
  {
    role: "Software QA Manager",
    company: "David Tatishvili Health Center",
    period: "Jul 2019 – Present",
    description:
      "Leading digital integration between clinic and insurance systems — replacing paper workflows with automation. Reduced admin time by ~30% and enabled 20–25% more patients daily.",
  },
];

// ── Services ────────────────────────────────────────────────

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive, performant web interfaces with React and Next.js — delivering smooth experiences across all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile apps with React Native and Expo, from prototype to production.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full web application development with modern JavaScript/TypeScript, state management, and API integration.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Auditing and improving site speed, accessibility, and Core Web Vitals for better user experience and SEO.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, interactive interfaces with attention to detail and smooth animations.",
  },
  {
    icon: GitBranch,
    title: "Process Automation",
    description:
      "Digitizing workflows and replacing manual processes with efficient, automated systems that save time and reduce errors.",
  },
];

// ── Skills ──────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "React / Next.js", level: 90 },
  { name: "React Native / Expo", level: 85 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "HTML / CSS / Sass", level: 95 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Node.js", level: 75 },
  { name: "Zustand / State Mgmt", level: 82 },
  { name: "Git / GitHub", level: 88 },
];

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    year: "2019",
    title: "Software QA Manager",
    description:
      "Joined David Tatishvili Health Center, leading digital transformation",
  },
  {
    year: "2023",
    title: "Discovered Programming",
    description:
      "Started self-learning frontend development — HTML, CSS, JavaScript",
  },
  {
    year: "2024",
    title: "Novatori — Professional Training & Internship",
    description:
      "Leveled up with professional training, then joined as a frontend intern building with React",
  },
  {
    year: "2025",
    title: "Frontend Dev at WEGAMERS",
    description: "Sole frontend developer for a gaming startup",
  },
];

// ── Projects ────────────────────────────────────────────────

export interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    category: "MOBILE APPLICATION",
    title: "Pokedex App",
    description:
      "A cross-platform mobile Pokedex built with React Native and Expo. Features real-time search, type-based color-coded cards with spring animations, and detailed Pokemon stats with visual progress bars — all powered by the PokeAPI.",
    tags: ["React Native", "Expo", "TypeScript", "PokeAPI"],
    github: "https://github.com/TamarCoder/Mobile-Pokedex-App-",
    live: null,
  },
  {
    category: "MUSIC STREAMING PLATFORM",
    title: "BeatFlow",
    description:
      "A music streaming web application with a modern UI. Built with React and Next.js on the frontend, featuring responsive layouts, audio playback, and a seamless user experience.",
    tags: ["React", "Next.js", "Sass", "REST API"],
    github: "https://github.com/Lasha-Khvichia/BeatFlow-FrontEnd",
    live: null,
  },
  {
    category: "GAMING PLATFORM",
    title: "WeGamers",
    description:
      "Frontend for a fast-growing gaming startup. As the sole frontend developer, I built the entire user-facing interface — from landing pages to real-time features — handling all frontend architecture and delivery.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    github: "https://github.com/WeGamers777/WeGamersFrint",
    live: null,
  },
];

// ── Contact ─────────────────────────────────────────────────

export const contactInfo = {
  email: "Thamuna.khuskivadze@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/tamar-khukisvadze",
    label: "linkedin.com/in/tamar-khukisvadze",
  },
  location: "Tbilisi, Georgia",
} as const;
