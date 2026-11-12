export type ProjectDevice = "phone" | "browser" | "showcase";

export interface Project {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  device: ProjectDevice;
  // Empty means screenshots are not added yet; the UI shows a placeholder.
  screens: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    category: "Gaming platform · Web",
    title: "WeGrids Web",
    description:
      "Customer-facing web app for the WeGrids gaming platform. As the sole frontend developer I own the whole architecture — live game streaming, short-form reels, tournaments, leaderboards and creator monetization.",
    highlights: ["Live streaming & chat", "Reels & stories", "Tournaments & brackets", "Real-time messenger"],
    tags: ["Angular 21", "SSR", "TypeScript", "SCSS", "Socket.IO", "Angular Material"],
    device: "browser",
    screens: ["/projects/WeGrids/home.jpg"],
    github: null,
    live: "https://www.wegrids.com",
  },
  {
    category: "Gaming platform · iOS & Android",
    title: "WeGrids Mobile",
    description:
      "The WeGrids gaming platform in your pocket — live streaming, reels and stories, tournaments, squads, a creator studio and a coin wallet, in English, Georgian and Russian.",
    highlights: ["Live streams & gifts", "Creator studio", "Squads & messaging", "Wallet & payouts"],
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
    category: "Finance · Web & desktop",
    title: "Billo",
    description:
      "An invoice app I built to stop typing monthly invoices by hand. Issuers, client companies and invoice templates live in one place — a new invoice takes seconds, and history is grouped by month. Runs in the browser and as a desktop app for macOS and Windows.",
    highlights: ["Invoices from templates", "History by month", "macOS & Windows app", "Accounts & password reset"],
    tags: ["React 19", "TypeScript", "Vite", "Electron", "Sass", "NestJS API"],
    device: "browser",
    screens: ["/projects/Billo/home.jpg"],
    github: "https://github.com/TamarCoder/Billo",
    live: "https://billo-three.vercel.app",
  },
  {
    category: "Mobile application",
    title: "Pokedex App",
    description:
      "A cross-platform Pokémon explorer built with React Native and Expo, powered by the PokeAPI — instant search, type-colored cards and detailed stats.",
    highlights: ["Real-time search", "Type-based colors", "Animated cards", "Stats with progress bars"],
    tags: ["React Native", "Expo", "TypeScript", "PokeAPI"],
    device: "phone",
    screens: [
      "/projects/Pokedex/Simulator Screenshot - iPhone 16e - 2026-04-22 at 12.53.45.png",
      "/projects/Pokedex/Simulator Screenshot - iPhone 16e - 2026-04-22 at 12.53.56.png",
      "/projects/Pokedex/Simulator Screenshot - iPhone 16e - 2026-04-22 at 12.54.10.png",
    ],
    github: "https://github.com/TamarCoder/Mobile-Pokedex-App-",
    live: null,
  },
];

