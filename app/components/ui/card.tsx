import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, className = "" }: CardProps) {
  return (
    <div
      className={`glass rounded-2xl ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
