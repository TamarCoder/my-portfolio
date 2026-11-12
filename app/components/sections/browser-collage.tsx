import Image from "next/image";
import BrowserMockup from "@/app/components/ui/devices/browser-mockup";

interface BrowserCollageProps {
  title: string;
  host: string;
  main: string;
  extras: string[];
}

const tilts = ["-rotate-2", "rotate-1 [animation-delay:-1.5s]", "-rotate-1 [animation-delay:-3s]", "rotate-2 [animation-delay:-4.5s]"];

// Main screen in a browser, the other screens as a row of glass cards that tuck under its bottom edge.
// Normal flow (no absolute positioning) so nothing covers the main screen at any width.
export default function BrowserCollage({ title, host, main, extras }: BrowserCollageProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <BrowserMockup
        src={main}
        alt={`${title} home`}
        url={host}
        aspect={1425 / 665}
        sizes="(min-width: 768px) 55vw, 95vw"
        fit="contain"
        className="relative z-10 w-full max-w-[56rem]"
      />

      <ul className="relative z-20 -mt-[4%] grid w-[94%] max-w-[52rem] grid-cols-4 gap-[2%]">
        {extras.slice(0, tilts.length).map((src, i) => (
          <li
            key={src}
            className={`glass animate-float rounded-xl p-1 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8),0_0_30px_-10px_var(--accent-glow)] sm:rounded-2xl sm:p-1.5 ${tilts[i]}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-950 sm:rounded-xl">
              <Image src={src} alt={`${title} screen ${i + 2}`} fill sizes="(min-width: 768px) 14rem, 24vw" quality={90} className="object-cover object-top" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
