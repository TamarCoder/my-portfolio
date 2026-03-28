import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card ${
        hover
          ? "transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
