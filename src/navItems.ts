import { siteConfig } from "./config";
import { getPosts } from "./lib/blog";

const hasItems = (items?: unknown[]) => Boolean(items && items.length > 0);
const posts = await getPosts();

// Root-relative anchors so the nav also works from /blog/ pages.
export const navItems = [
  { href: "/#publications", label: "Publications", show: hasItems(siteConfig.publications) },
  { href: "/#about", label: "About", show: true },
  { href: "/#projects", label: "Projects", show: hasItems(siteConfig.projects) },
  { href: "/#experience", label: "Experience", show: hasItems(siteConfig.experience) },
  { href: "/#education", label: "Education", show: hasItems(siteConfig.education) },
  // Last, matching the Blog section's position at the end of the homepage.
  { href: "/blog/", label: "Blog", show: hasItems(posts) },
].filter((item) => item.show);
