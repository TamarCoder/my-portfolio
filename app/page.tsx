import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
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
      <Header />
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
    </>
  );
}
