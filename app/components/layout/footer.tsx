import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import Button from "@/app/components/ui/button";
import { navLinks, contactInfo } from "@/app/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-accent">T</span>amar
            <span className="text-accent">.</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href={contactInfo.linkedin.url}
              variant="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2"
            >
              <LinkedInIcon size={16} />
            </Button>
            <Button
              href={`mailto:${contactInfo.email}`}
              variant="icon"
              aria-label="Email"
              className="p-2"
            >
              <Mail size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tamar Khuskivadze. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
