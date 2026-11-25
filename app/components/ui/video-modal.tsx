"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface VideoModalProps {
  src: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
  isLandscape?: boolean;
}

export default function VideoModal({ src, title, closeLabel, onClose, isLandscape = false }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      data-no-step
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="animate-fade-in-up fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
    >
      <div onClick={(e) => e.stopPropagation()} className={`relative max-w-full ${isLandscape ? "aspect-video w-[min(90vw,1280px)] max-h-[85vh]" : "h-[min(85vh,820px)] aspect-[9/16]"}`}>
        <video
          src={src}
          autoPlay
          controls
          playsInline
          controlsList="nodownload"
          className="glass h-full w-full rounded-3xl object-cover shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="glass absolute -top-3 -right-3 rounded-full p-2 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <X size={18} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
