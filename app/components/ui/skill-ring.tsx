const R = 22;
const CIRC = 2 * Math.PI * R;

export default function SkillRing({ level, show }: { level: number; show: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90" aria-hidden>
      <defs>
        <linearGradient id="skill-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-light)" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r={R} fill="none" strokeWidth="4" className="stroke-foreground/10" />
      <circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        stroke="url(#skill-grad)"
        strokeDasharray={CIRC}
        strokeDashoffset={show ? CIRC * (1 - level / 100) : CIRC}
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)" }}
      />
    </svg>
  );
}
