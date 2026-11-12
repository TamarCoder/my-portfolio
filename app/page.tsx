import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import AuroraBackground from "@/app/components/layout/aurora-background";
import Hero from "@/app/components/sections/hero";
import Marquee from "@/app/components/sections/marquee";
import Experience from "@/app/components/sections/experience";
import Services from "@/app/components/sections/services";
import Skills from "@/app/components/sections/skills";
import Projects from "@/app/components/sections/projects";
import Contact from "@/app/components/sections/contact";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Header />
      <div className="md:pl-24">
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
}
