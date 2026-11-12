import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function Card({ children, hover = false, className = "" }: CardProps) {
  return (
    <div
      data-tilt={hover || undefined}
      className={`glass rounded-2xl ${
        hover
          ? "hover:-translate-y-1 hover:border-accent/40"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
