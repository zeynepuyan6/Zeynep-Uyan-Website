import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Timeline } from "../components/Timeline";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { Services } from "../components/Services";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <ProjectsGrid />
      <Services />
      <Contact />
    </>
  );
}
