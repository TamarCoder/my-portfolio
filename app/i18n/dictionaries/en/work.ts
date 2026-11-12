import type { WorkText } from "@/app/i18n/types";

export const work: WorkText = {
  experiences: [
    { role: "Frontend Developer", company: "WEGRIDS", period: "Nov 2025 – Present", description: "Sole frontend developer handling the complete frontend architecture, UI implementation, and feature delivery for a gaming startup." },
    { role: "Frontend Developer", company: "Novatori", period: "May 2024 – Present", description: "Building web interfaces with React, developing responsive and interactive components, integrating APIs, and collaborating in a hybrid team environment." },
    { role: "Software QA Manager", company: "David Tatishvili Health Center", period: "Jul 2019 – Present", description: "Leading digital integration between clinic and insurance systems — replacing paper workflows with automation. Reduced admin time by ~30% and enabled 20–25% more patients daily." },
  ],
  skills: { label: "04 / Skills & journey", title: "My skills & experience", techStack: "Tech stack", journey: "My journey" },
  journey: [
    { year: "2019", title: "Software QA Manager", description: "Joined David Tatishvili Health Center, leading digital transformation" },
    { year: "2023", title: "Discovered programming", description: "Started self-learning frontend development — HTML, CSS, JavaScript" },
    { year: "2024", title: "Novatori — Professional training & internship", description: "Leveled up with professional training, then joined as a frontend intern building with React" },
    { year: "2025", title: "Frontend developer at WEGRIDS", description: "Sole frontend developer for a gaming startup" },
  ],
  services: {
    label: "03 / Services",
    titleStart: "What I can",
    titleAccent: "build",
    titleEnd: "for you",
    builtWith: "Built with",
    whereIDidIt: "Where I did it",
    startProject: "Start a project",
    items: {
      frontend: { title: "Frontend Development", description: "Responsive, fast web interfaces with React, Next.js and Angular — smooth on every device.", stack: ["React", "Next.js", "Angular 21", "TypeScript", "Tailwind CSS"], proof: [{ place: "WeGrids Web", result: "Sole frontend developer — streaming, reels, tournaments" }] },
      mobile: { title: "Mobile Development", description: "Cross-platform iOS and Android apps with React Native and Expo, from prototype to production.", stack: ["React Native", "Expo", "Zustand", "React Query", "Socket.IO"], proof: [{ place: "WeGrids Mobile", result: "Live streams, creator studio, wallet — in 3 languages" }] },
      webApps: { title: "Web Applications", description: "Complete web apps with state management, real-time data and API integration.", stack: ["TypeScript", "REST API", "Socket.IO", "NestJS", "Electron"], proof: [{ place: "Billo", result: "Invoice app for web, macOS and Windows" }, { place: "WeGrids Web", result: "Real-time messenger and live chat over Socket.IO" }] },
      performance: { title: "Performance Optimization", description: "Faster loading, better accessibility and Core Web Vitals for users and SEO.", stack: ["SSR", "Code splitting", "Image optimization", "Lighthouse"], proof: [{ place: "WeGrids Web", result: "Server-side rendering with Angular SSR" }] },
      uiux: { title: "UI/UX Implementation", description: "Designs turned into pixel-perfect, interactive interfaces with careful animation.", stack: ["Tailwind CSS", "SCSS", "Angular Material", "NativeWind", "CSS animation"], proof: [{ place: "WeGrids Mobile", result: "Onboarding, dark and light themes" }, { place: "This portfolio", result: "Glass design, 3D tilt and device mockups" }] },
      automation: { title: "Process Automation", description: "Manual, paper-based work replaced with systems that save time and reduce errors.", stack: ["Workflow analysis", "System integration", "QA", "Digital forms"], proof: [{ place: "Health center", result: "~30% less admin time, 20–25% more patients daily" }, { place: "Billo", result: "Monthly invoices in seconds instead of by hand" }] },
    },
  },
  projects: {
    label: "05 / Featured projects",
    previous: "Previous project",
    next: "Next project",
    liveDemo: "Live demo",
    sourceCode: "Source code",
    privateCode: "Private company code",
    screensSoon: "Screens soon",
    items: {
      wegridsWeb: { category: "Gaming platform · Web", description: "Customer-facing web app for the WeGrids gaming platform. As the sole frontend developer I own the whole architecture — live game streaming, short-form reels, tournaments, leaderboards and creator monetization.", highlights: ["Live streaming & chat", "Reels & stories", "Tournaments & brackets", "Real-time messenger"] },
      wegridsMobile: { category: "Gaming platform · iOS & Android", description: "The WeGrids gaming platform in your pocket — live streaming, reels and stories, tournaments, squads, a creator studio and a coin wallet, in English, Georgian and Russian.", highlights: ["Live streams & gifts", "Creator studio", "Squads & messaging", "Wallet & payouts"] },
      billo: { category: "Finance · Web & desktop", description: "An invoice app I built to stop typing monthly invoices by hand. Issuers, client companies and invoice templates live in one place — a new invoice takes seconds, and history is grouped by month. Runs in the browser and as a desktop app for macOS and Windows.", highlights: ["Invoices from templates", "History by month", "macOS & Windows app", "Accounts & password reset"] },
    },
  },
};
