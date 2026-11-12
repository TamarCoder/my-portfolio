export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-blob aurora-1 -left-[10%] top-[5%] h-[45vw] w-[45vw]" />
      <div className="aurora-blob aurora-2 right-[-10%] top-[30%] h-[40vw] w-[40vw]" />
      <div className="aurora-blob aurora-3 bottom-[-10%] left-[25%] h-[38vw] w-[38vw]" />
    </div>
  );
}
