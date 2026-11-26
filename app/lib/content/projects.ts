import type { ProjectId } from "@/app/i18n/types";
import { wegridsWeb, billo, priceteka, flow } from "@/app/lib/content/web-projects";
import { wegridsMobile, watchnext } from "@/app/lib/content/mobile-projects";

type ProjectDevice = "phone" | "browser" | "showcase";

// Translated text lives in app/i18n/dictionaries, keyed by id.
export interface Project {
  id: ProjectId;
  title: string;
  tags: string[];
  device: ProjectDevice;
  // Empty means screenshots are not added yet; the UI shows a placeholder.
  screens: string[];
  // Width / height of the back screens in the browser video stage.
  screenAspect?: number;
  github: string | null;
  live: string | null;
  // Short intro video, opened in a modal. Vertical for phones, landscape for browsers.
  video?: string;
}

export const projects: Project[] = [wegridsWeb, wegridsMobile, watchnext, billo, priceteka, flow];
