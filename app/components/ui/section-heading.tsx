interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <p className="mb-2 font-mono text-sm tracking-widest text-accent uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}
