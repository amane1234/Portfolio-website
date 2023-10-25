import { siteConfig } from "@/config/site-config";
import { Fragment } from "react";

export default function About() {
  return (
    <section id="about" className="pt-20 text-muted-foreground sm:text-lg">
      {/* About me section */}
      <div className="group">
        <h1 className="title-bottom-line">About me</h1>

        <p>
        I am Taehee Kim, a tech and gaming enthusiast who loves
        coding, playing video games, and exploring computer hardwares.
        </p>

        <p className="mt-3">
          In my free time, I enjoy video editing as a side gig.
        </p>
        <p className = "mt-3">
          I always try my best to improve my skills.
        </p>
      </div>

      {/* Technologies*/}
      <div className="group">
        <h1 className="title-bottom-line mt-20">Technologies</h1>
        <div className="flex flex-wrap gap-4">
          {siteConfig.skillIcons.map((icon, idx) => (
            <Fragment key={idx}>
              <icon.Icon key={idx} className="h-11 w-11" />
              <span className="sr-only">{icon.title}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
