import { mainNav } from "./main-nav";
import { links } from "./links";
import { skillIcons } from "./skill-icons";
import { projects } from "./projects";
import { envConfig } from "../env-config";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Taehee Kim",
  title: "Taehee Kim portfolio",
  url: envConfig.BASE_URL,
  description:
    "Portfolio website of Taehee Kim",
  mainNav,
  links,
  skillIcons,
  projects,
  favicon: `${envConfig.BASE_URL}/icons/favicon.ico`,
  shortcutIcon: `${envConfig.BASE_URL}/icons/shortcut-icon.png`,
  appleTouchIcon: `${envConfig.BASE_URL}/icons/apple-touch-icon.png`,
  ogImage: `${envConfig.BASE_URL}/images/og.png`,
  country: "Canada",
};
