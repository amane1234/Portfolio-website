import Link from "next/link";
import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { siteConfig } from "@/config/site-config";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 text-muted-foreground">
      <div className="group">
        <h1 className="title-bottom-line inline-flex items-center">
          Social media <Icons.web className="ml-2 h-5 w-5" />
        </h1>

        {/* social media buttons and icons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Icons.gitHub className="mr-2 h-6 w-6" /> @amane1234
          </Link>

          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.instagram}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Icons.Instagram className="mr-2 h-7 w-7"/> @__thhm
          </Link>
          
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.youtube}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Icons.Youtube className="mr-2 h-6 w-6"/> @Virtualkirinuki
          </Link>

        </div>

        <p className="mt-10">
          Please feel free to contact me
        </p>

        <div className="mt-20 flex items-center justify-center flex-wrap gap-20">
          <Link
            target="_blank"
            href={siteConfig.links.mail}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Icons.mail className="mr-2 h-5 w-5" /> E-mail
          </Link>

          <Link
            target="_blank"
            href={siteConfig.links.sourceCode}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Icons.gitHub className="mr-2 h-5 w-5" /> Source code
          </Link>
        </div>
      </div>
    </section>
  );
}
