import type { LucideIcon } from "lucide-react";
import { Monitor, Smartphone, Globe, Zap, Palette, GitBranch } from "lucide-react";
import type { ServiceId } from "@/app/i18n/types";

// Text for each service lives in app/i18n/dictionaries, keyed by the same id.
export const services: { id: ServiceId; icon: LucideIcon }[] = [
  { id: "frontend", icon: Monitor },
  { id: "mobile", icon: Smartphone },
  { id: "webApps", icon: Globe },
  { id: "performance", icon: Zap },
  { id: "uiux", icon: Palette },
  { id: "automation", icon: GitBranch },
];
