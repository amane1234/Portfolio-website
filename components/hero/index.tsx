import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { socialLinks } from "@/config/site-config/links";

import { coverImages, profileImages } from "@/config/site-config/cvs";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-[736px] flex-col items-center pt-[65px]">
      <div className="w-full">
        <Image
          src={coverImages[1].src}
          alt="cover photo"
          width={750}
          height={750}
          priority
          className="h-48 w-full object-cover object-center xs:h-64"
        />

        <div className="flex items-center justify-between px-2 xs:pl-4">
          <div className="relative z-10 -mt-[55px] rounded-full bg-background p-2 xs:-mt-20">
            <Image
              src={profileImages[0].src}
              alt="profile-img"
              width={200}
              height={200}
              priority
              className="h-24 w-24 rounded-full object-cover object-top xs:h-32 xs:w-32"
            />
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-end space-x-1 xs:space-x-2">
            {socialLinks.map((linkInfo) => (
              <Link
                key={linkInfo.href}
                href={linkInfo.href}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <linkInfo.icon className="h-[23px] w-[23px]" />
                  <span className="sr-only">{linkInfo.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
