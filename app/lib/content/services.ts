import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Palette,
  GitBranch,
} from "lucide-react";


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

