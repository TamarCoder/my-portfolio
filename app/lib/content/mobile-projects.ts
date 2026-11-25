import type { Project } from "@/app/lib/content/projects";

export const wegridsMobile: Project = {
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
};

export const watchnext: Project = {
  id: "watchnext",
  title: "Watchnext",
  tags: ["React Native", "Expo", "TypeScript", "TMDB API", "Unit tests", "CI"],
  device: "phone",
  // With a video, the first four sit behind it: far left, near left, near right, far right.
  screens: [
    "/projects/Watchnext/home-dark.jpg",
    "/projects/Watchnext/tv-home-light.jpg",
    "/projects/Watchnext/movie-dark.jpg",
    "/projects/Watchnext/person-light.jpg",
    "/projects/Watchnext/tv-details-dark.jpg",
    "/projects/Watchnext/genre-dark.jpg",
  ],
  github: "https://github.com/TamarCoder/watchnext",
  live: null,
  video: "/projects/Watchnext/intro.mp4",
};
