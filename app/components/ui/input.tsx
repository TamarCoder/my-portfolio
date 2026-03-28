import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseClasses =
  "rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export function Input({ className = "", ...props }: InputProps) {
  return <input className={`${baseClasses} ${className}`} {...props} />;
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`resize-none ${baseClasses} ${className}`}
      {...props}
    />
  );
}
