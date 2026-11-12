import type { LucideIcon } from "lucide-react";
import { Monitor, Smartphone, Globe, Zap, Palette, GitBranch } from "lucide-react";

export interface ServiceProof {
  place: string;
  result: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  stack: string[];
  proof: ServiceProof[];
}

export const services: Service[] = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Responsive, fast web interfaces with React, Next.js and Angular — smooth on every device.",
    stack: ["React", "Next.js", "Angular 21", "TypeScript", "Tailwind CSS"],
    proof: [
      { place: "WeGrids Web", result: "Sole frontend developer — streaming, reels, tournaments" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform iOS and Android apps with React Native and Expo, from prototype to production.",
    stack: ["React Native", "Expo", "Zustand", "React Query", "Socket.IO"],
    proof: [
      { place: "WeGrids Mobile", result: "Live streams, creator studio, wallet — in 3 languages" },
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Complete web apps with state management, real-time data and API integration.",
    stack: ["TypeScript", "REST API", "Socket.IO", "NestJS", "Electron"],
    proof: [
      { place: "Billo", result: "Invoice app for web, macOS and Windows" },
      { place: "WeGrids Web", result: "Real-time messenger and live chat over Socket.IO" },
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Faster loading, better accessibility and Core Web Vitals for users and SEO.",
    stack: ["SSR", "Code splitting", "Image optimization", "Lighthouse"],
    proof: [
      { place: "WeGrids Web", result: "Server-side rendering with Angular SSR" },
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description: "Designs turned into pixel-perfect, interactive interfaces with careful animation.",
    stack: ["Tailwind CSS", "SCSS", "Angular Material", "NativeWind", "CSS animation"],
    proof: [
      { place: "WeGrids Mobile", result: "Onboarding, dark and light themes" },
      { place: "This portfolio", result: "Glass design, 3D tilt and device mockups" },
    ],
  },
  {
    icon: GitBranch,
    title: "Process Automation",
    description: "Manual, paper-based work replaced with systems that save time and reduce errors.",
    stack: ["Workflow analysis", "System integration", "QA", "Digital forms"],
    proof: [
      { place: "Health center", result: "~30% less admin time, 20–25% more patients daily" },
      { place: "Billo", result: "Monthly invoices in seconds instead of by hand" },
    ],
  },
];
