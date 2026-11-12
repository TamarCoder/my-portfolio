import Image from "next/image";

const floatingTech = [
  { label: "React", className: "-left-10 top-[12%]" },
  { label: "React Native", className: "-right-12 top-[38%] [animation-delay:-2s]" },
  { label: "Angular", className: "-left-14 bottom-[30%] [animation-delay:-4s]" },
];

const profileLines = [
  ["role", '"Frontend & Mobile"'],
  ["stack", '["React", "RN", "Angular"]'],
  ["basedIn", '"Tbilisi, GE"'],
  ["available", "true"],
];

// Photo with a code card and tech chips around it: shows "developer" before any text is read.
export default function HeroPortrait() {
  return (
    <div className="relative mx-auto w-[clamp(15rem,30vh,24rem)]">
      <div className="pointer-events-none absolute -inset-16 rounded-full bg-linear-to-br from-accent/40 to-cyan-400/30 blur-[80px]" />

      <div data-tilt className="relative aspect-[4/5] rounded-[2.5rem] bg-linear-to-br from-accent via-violet-500 to-cyan-400 p-[2px]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem]">
          <Image src="/profile-hero.jpg" alt="Tamar Khuskivadze" fill priority sizes="400px" className="object-cover object-top" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      </div>

      {floatingTech.map((tech) => (
        <span key={tech.label} className={`glass animate-float absolute rounded-full px-4 py-2 text-sm font-medium shadow-lg ${tech.className}`}>
          {tech.label}
        </span>
      ))}

      <pre className="glass absolute -bottom-10 -right-6 rounded-2xl px-5 py-4 font-mono text-[clamp(0.65rem,1.3vh,0.8rem)] leading-relaxed shadow-2xl sm:-right-20">
        <span className="text-accent-light">const</span> tamar = {"{"}
        {profileLines.map(([key, value]) => (
          <span key={key} className="block pl-4">
            <span className="text-cyan-300">{key}</span>: <span className="text-emerald-300">{value}</span>,
          </span>
        ))}
        {"}"};
      </pre>
    </div>
  );
}
