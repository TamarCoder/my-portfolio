export type ServiceId = "frontend" | "mobile" | "webApps" | "performance" | "uiux" | "automation";
export type ProjectId = "wegridsWeb" | "wegridsMobile" | "billo";
export type NavId = "home" | "about" | "services" | "skills" | "projects" | "contact";

interface LabeledValue {
  value: string;
  label: string;
}

export interface UiText {
  nav: Record<NavId, string>;
  common: { toggleTheme: string; toggleMenu: string; nextSection: string; language: string };
  hero: {
    available: string;
    location: string;
    greeting: string;
    titleStart: string;
    web: string;
    and: string;
    mobile: string;
    titleEnd: string;
    intro: string;
    seeWork: string;
    getInTouch: string;
    stats: LabeledValue[];
  };
  about: {
    label: string;
    role: string;
    titleStart: string;
    titleAccent: string;
    paragraphs: string[];
    metrics: LabeledValue[];
    experienceLabel: string;
  };
  contact: {
    label: string;
    titleStart: string;
    titleAccent: string;
    intro: string;
    openToWork: string;
    email: string;
    linkedin: string;
    basedIn: string;
    location: string;
    formTitle: string;
    name: string;
    yourEmail: string;
    subject: string;
    message: string;
    replyTime: string;
    send: string;
    from: string;
  };
}

export interface WorkText {
  experiences: { role: string; company: string; period: string; description: string }[];
  skills: { label: string; title: string; techStack: string; journey: string };
  journey: { year: string; title: string; description: string }[];
  services: {
    label: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    builtWith: string;
    whereIDidIt: string;
    startProject: string;
    items: Record<ServiceId, { title: string; description: string; stack: string[]; proof: { place: string; result: string }[] }>;
  };
  projects: {
    label: string;
    previous: string;
    next: string;
    liveDemo: string;
    sourceCode: string;
    privateCode: string;
    screensSoon: string;
    items: Record<ProjectId, { category: string; description: string; highlights: string[] }>;
  };
}

export type Dictionary = UiText & WorkText;
