import { About, Contact, Hero, Intro, Projects } from "@/components";

export default function IndexPage() {
  return (
    <div className ="pb-4">
      <Hero />
      <div className="container px-4 pb-4 xs:px-8">
        <Intro />
        <About />
        <Projects />
        <h1 className ="mt-4 text-sm opacity-50">Website with AI may not work due to OPEN-AI API policy</h1>
        <Contact />
      </div>
    </div>
  );
}
