import { siteConfig } from "./config";

const hasItems = (items?: unknown[]) => Boolean(items && items.length > 0);

export const navItems = [
  { href: "#about", label: "About", show: true },
  { href: "#projects", label: "Projects", show: hasItems(siteConfig.projects) },
  { href: "#publications", label: "Publications", show: hasItems(siteConfig.publications) },
  { href: "#experience", label: "Experience", show: hasItems(siteConfig.experience) },
  { href: "#education", label: "Education", show: hasItems(siteConfig.education) },
].filter((item) => item.show);
