import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const baseClasses =
  "rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-muted-foreground/70 focus:border-accent/60 focus:ring-4 focus:ring-accent/15";

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
