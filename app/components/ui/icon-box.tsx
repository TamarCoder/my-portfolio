import type { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-10 w-10 rounded-xl",
  lg: "h-11 w-11 rounded-xl",
};

export default function IconBox({
  children,
  size = "md",
  className = "",
}: IconBoxProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-accent/10 ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
