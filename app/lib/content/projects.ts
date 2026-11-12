import type { ProjectId } from "@/app/i18n/types";

export type ProjectDevice = "phone" | "browser" | "showcase";

// Translated text lives in app/i18n/dictionaries, keyed by id.
export interface Project {
  id: ProjectId;
  title: string;
  tags: string[];
  device: ProjectDevice;
  // Empty means screenshots are not added yet; the UI shows a placeholder.
  screens: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    id: "wegridsWeb",
    title: "WeGrids Web",
    tags: ["Angular 21", "SSR", "TypeScript", "SCSS", "Socket.IO", "Angular Material"],
    device: "browser",
    // First is the main browser screen; the rest float around it.
    screens: [
      "/projects/WeGrids/01-hero.jpg",
      "/projects/WeGrids/04-tournaments.jpg",
      "/projects/WeGrids/03-streaming.jpg",
      "/projects/WeGrids/05-badges.jpg",
      "/projects/WeGrids/06-social.jpg",
    ],
    github: null,
    live: "https://www.wegrids.com",
  },
  {
    id: "wegridsMobile",
    title: "WeGrids Mobile",
    tags: ["React Native", "Expo", "TypeScript", "Zustand", "React Query", "Socket.IO"],
    device: "phone",
    // The first three are shown: center, left, right.
    screens: [
      "/projects/WeGrids-Mobile/onboarding-streaming.jpg",
      "/projects/WeGrids-Mobile/home.jpg",
      "/projects/WeGrids-Mobile/profile.jpg",
      "/projects/WeGrids-Mobile/wallet-settings.jpg",
      "/projects/WeGrids-Mobile/sign-up.jpg",
      "/projects/WeGrids-Mobile/onboarding-tournaments.jpg",
      "/projects/WeGrids-Mobile/onboarding-reels.jpg",
      "/projects/WeGrids-Mobile/onboarding-community.jpg",
      "/projects/WeGrids-Mobile/onboarding-verification.jpg",
      "/projects/WeGrids-Mobile/sign-in.jpg",
    ],
    github: null,
    live: null,
  },
  {
    id: "billo",
    title: "Billo",
    tags: ["React 19", "TypeScript", "Vite", "Electron", "Sass", "NestJS API"],
    device: "browser",
    screens: ["/projects/Billo/home.jpg"],
    github: "https://github.com/TamarCoder/Billo",
    live: "https://billo-three.vercel.app",
  },
];

