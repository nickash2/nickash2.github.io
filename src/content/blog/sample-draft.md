---
title: "Sample draft: previewing the article layout"
description: "A placeholder that shows how headings, lists, code and quotes render. It is a draft, so it never ships to the live site."
pubDate: 2026-11-16
draft: true
---

This is a sample draft. It exists only so the article layout can be previewed with `npm run dev`. Drafts are excluded from production builds, so this page never appears on the live site. Replace or delete it when you write your first real post.

## Writing a post

Add a Markdown file to `src/content/blog/`. Its file name becomes the URL, so `my-post.md` is served at `/blog/my-post/`.

### Front matter

Each post starts with four required fields and one optional field:

- `title`: the headline.
- `description`: one or two sentences, used in lists and link previews.
- `pubDate`: the publication date, for example `2026-11-16`.
- `draft`: `true` while writing, `false` to publish.
- `updatedDate` (optional): shown next to the publication date.

## Formatting

Paragraphs, **bold**, _italic_, [links](https://astro.build/) and `inline code` all use the site's type system.

1. Numbered lists work too.
2. So do nested ideas, kept short.

```python
def mean(values: list[float]) -> float:
    return sum(values) / len(values)
```

> Block quotes render in a quieter, italic style.

---

When this post is ready, set `draft: false`, run `npm run build`, and the Blog section and navigation link appear automatically.
