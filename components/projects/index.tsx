import { siteConfig } from "@/config/site-config";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="pt-20 text-muted-foreground sm:text-lg">
      <div className="group">
        <h1 className="title-bottom-line mb-5">Projects</h1>
        <div className="mt-10 grid place-content-center gap-y-8 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5">
          {siteConfig.projects.map((pj, idx) => (
            <ProjectCard key={idx} {...pj} />
          ))}
        </div>
      </div>
    </section>
  );
}
