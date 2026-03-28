import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "rounded-full bg-accent px-7 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light",
  secondary:
    "rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent",
  icon: "rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent",
};

interface ButtonBaseProps {
  variant?: Variant;
  glow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button(props: ButtonProps) {
  const { variant = "primary", glow, children, className = "", ...rest } = props;
  const classes = `${variants[variant]} ${glow ? "animate-pulse-glow" : ""} ${className}`.trim();

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
