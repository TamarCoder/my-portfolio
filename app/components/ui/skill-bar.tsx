import type { Skill } from "@/app/lib/data";

export default function SkillBar({ name, level }: Skill) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="font-mono text-accent">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-linear-to-r from-accent to-accent-light transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
