export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "WEGRIDS",
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
    title: "Frontend Dev at WEGRIDS",
    description: "Sole frontend developer for a gaming startup",
  },
];

