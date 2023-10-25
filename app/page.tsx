import { About, Contact, Hero, Intro, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className ="pb-4">
      <Hero />
      <div className="container px-4 pb-4 xs:px-8">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
