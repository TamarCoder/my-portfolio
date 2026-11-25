import type { Project } from "@/app/lib/content/projects";

export const wegridsWeb: Project = {
  id: "wegridsWeb",
  title: "WeGrids Web",
  tags: ["Angular 21", "SSR", "TypeScript", "SCSS", "Socket.IO", "Angular Material"],
  device: "browser",
  // First is the main browser screen; the rest float around it.
  screens: [
    "/projects/WeGrids/01-hero.png",
    "/projects/WeGrids/04-tournaments.png",
    "/projects/WeGrids/03-streaming.png",
    "/projects/WeGrids/05-badges.png",
    "/projects/WeGrids/06-social.png",
  ],
  github: null,
  live: "https://www.wegrids.com",
  // Landscape: plays in the front window, screens 2-5 sit behind it.
  video: "/projects/WeGrids/intro.mp4",
};

export const billo: Project = {
  id: "billo",
  title: "Billo",
  tags: ["React 19", "TypeScript", "Vite", "Electron", "Sass", "NestJS API"],
  device: "browser",
  // First is the still fallback for the video; the other four sit behind it.
  screens: [
    "/projects/Billo/home.jpg",
    "/projects/Billo/landing.png",
    "/projects/Billo/invoice-form.png",
    "/projects/Billo/history.png",
    "/projects/Billo/settings.png",
  ],
  screenAspect: 16 / 10,
  github: "https://github.com/TamarCoder/Billo",
  live: "https://billo-three.vercel.app",
  video: "/projects/Billo/intro.mp4",
};

export const priceteka: Project = {
  id: "priceteka",
  title: "Priceteka",
  tags: ["React 19", "TypeScript", "Vite", "Electron", "Sass", "NestJS API"],
  device: "browser",
  // Landing is the video's still fallback and also one of the four back screens.
  screens: [
    "/projects/Priceteka/landing.png",
    "/projects/Priceteka/files.png",
    "/projects/Priceteka/price-list.png",
    "/projects/Priceteka/profile.png",
  ],
  screenAspect: 16 / 9,
  github: "https://github.com/TamarCoder/priceteka",
  live: null,
  video: "/projects/Priceteka/intro.mp4",
};
