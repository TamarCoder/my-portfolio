import ContactChannels from "@/app/components/sections/contact-channels";
import ContactForm from "@/app/components/sections/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-full items-center py-10">
      <div className="mx-auto grid w-full max-w-[2200px] items-stretch gap-10 px-6 lg:grid-cols-12 lg:px-12">
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-accent-light uppercase">06 / Contact</p>
          <h2 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            Let&apos;s build something{" "}
            <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">together</span>
          </h2>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or looking for a frontend developer? Write to me — I&apos;d love to hear about it.
          </p>

          <div className="glass mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new projects
          </div>

          <ContactChannels />
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
