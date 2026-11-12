import { Home, User, Layers, Sparkles, FolderGit2, Mail, type LucideIcon } from "lucide-react";

export const navIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": User,
  "/services": Layers,
  "/skills": Sparkles,
  "/projects": FolderGit2,
  "/contact": Mail,
};
