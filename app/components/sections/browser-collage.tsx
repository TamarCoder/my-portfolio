import Image from "next/image";
import BrowserMockup from "@/app/components/ui/devices/browser-mockup";

interface BrowserCollageProps {
  title: string;
  host: string;
  main: string;
  extras: string[];
}

// Corner slots for the extra screens; they overlap the browser edges so the group reads as one piece.
const slots = [
  "-left-[2%] top-[2%] -rotate-3",
  "-right-[2%] top-0 rotate-2 [animation-delay:-1.5s]",
  "-left-[1%] bottom-[2%] rotate-2 [animation-delay:-3s]",
  "-right-[1%] bottom-0 -rotate-2 [animation-delay:-4.5s]",
];

// Main screen in a browser, up to four more as floating glass cards around it.
export default function BrowserCollage({ title, host, main, extras }: BrowserCollageProps) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <BrowserMockup src={main} alt={`${title} home`} url={host} aspect={1425 / 665} sizes="(min-width: 1024px) 60vw, 90vw" className="w-[70%] max-w-[60rem]" />
      </div>

      {extras.slice(0, slots.length).map((src, i) => (
        <div
          key={src}
          className={`glass animate-float absolute z-20 hidden w-[24%] max-w-xs rounded-2xl p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-12px_var(--accent-glow)] sm:block ${slots[i]}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-zinc-950">
            <Image src={src} alt={`${title} screen ${i + 2}`} fill sizes="(min-width: 1024px) 20rem, 30vw" quality={90} className="object-cover object-top" />
          </div>
        </div>
      ))}
    </div>
  );
}
