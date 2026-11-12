import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import AuroraBackground from "@/app/components/layout/aurora-background";
import SectionStage from "@/app/components/layout/section-stage";
import TiltOnHover from "@/app/components/effects/tilt-on-hover";
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
      <TiltOnHover />
      <Header />
      <SectionStage
        sections={{
          "#home": <Hero />,
          "#about": (
            <>
              <Marquee />
              <Experience />
            </>
          ),
          "#services": <Services />,
          "#skills": <Skills />,
          "#projects": <Projects />,
          "#contact": (
            <>
              <Contact />
              <Footer />
            </>
          ),
        }}
      />
    </>
  );
}
