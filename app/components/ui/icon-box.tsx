import type { ReactNode } from "react";

interface IconBoxProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "h-9 w-9 rounded-lg",
  md: "h-10 w-10 rounded-xl",
  lg: "h-12 w-12 rounded-2xl",
  xl: "h-16 w-16 rounded-2xl",
};

// Gradient tile with a top highlight and glow, so icons read as raised 3D buttons.
export default function IconBox({ children, size = "md", className = "" }: IconBoxProps) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center bg-linear-to-br from-accent via-violet-500 to-cyan-500 text-white shadow-[0_10px_30px_-8px_var(--accent-glow),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_6px_rgba(0,0,0,0.25)] ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}
