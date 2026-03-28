import { marqueeItems } from "@/app/lib/data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-border bg-muted/50 py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
              {item}
            </span>
            <span className="text-accent">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}
