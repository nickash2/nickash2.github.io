import { getCollection } from "astro:content";

/** Drafts are visible in `npm run dev` only; production builds never render them. */
export const showDrafts = import.meta.env.DEV;

export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export type Post = Awaited<ReturnType<typeof getPosts>>[number];

export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
