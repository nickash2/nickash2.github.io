# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Publications, Experience, Education, Blog, Header, Footer), plus shared building blocks: `Section.astro` (section shell + heading), `EntryCard.astro` (logo/title/date/bullets card, used by Education), `SocialLinks.astro` (icon links, shown only for configured socials), `Figure.astro` (figure on a softened `--paper` plate, multiplied so white chart backgrounds don't glare while data colours stay intact; links to the full-size file; responsive `srcset`, optional `maxDisplayWidth` for low-resolution sources, mono caption), `PostList.astro` (dated post list shared by the homepage Blog section and `/blog/`)
- **Figures** (`public/figures/`): WebP figures from Nicholas's own papers or work (never invented imagery), optionally with a `-<width>.webp` small variant; referenced from `heroFigure` and `publications[].figure` in the config. Third-party images (e.g. the DenseNet121 diagram from Jee et al. (2022)) keep their source credit in the caption via `source`
- **Section order**: Hero, Publications, About, Projects, Experience, Education, Blog. Experience renders as a company-grouped timeline: bullets are always in the DOM and visible without JS/under reduced motion; JS adds a scroll progress rail, highlights the active role and reveals bullets as they enter the viewport
- **Navigation** (`src/navItems.ts`): Single list of links used by both Header and Footer. Hrefs are root-relative (`/#about`) so they also work from `/blog/` pages; the Blog link comes last (matching scroll order) and shows only when there are visible posts
- **Layouts** (`src/layouts/BaseLayout.astro`): Shared `<html>`/head/meta, skip link, Header and Footer for every page
- **Pages**: `src/pages/index.astro` (single-page portfolio) and `src/pages/blog/[...slug].astro` (one route for both the `/blog/` index and `/blog/<post>/` articles)
- **Blog** (`src/content/blog/*.md`, schema in `src/content.config.ts`, helpers in `src/lib/blog.ts`): Markdown posts. Drafts render only in `npm run dev`; production builds emit no blog pages, homepage section or nav link until at least one post is published
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config is set as `--accent-color` on `<html>`; `global.css` derives `--accent-text` (a lighter, AA-contrast tint for text) and exposes both as Tailwind colors `bg-accent` / `text-accent-text`. Use `accent` for fills behind white text and `accent-text` for coloured text.

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Sans (display/body) and IBM Plex Mono (dates, venues, captions and other metadata only, via `font-mono`), loaded from Google Fonts
- The hero's single motion moment is a clip-path "plot reveal" on the forecast figure, disabled under `prefers-reduced-motion`
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, tagline, researchStatement (hero lead; text before the first ":" is emphasised), description, accentColor
- heroFigure: {src, srcSmall, width, height, alt, caption, source, link}
- Social links: email, linkedin, twitter, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- publications: array of {title, authors, venue, link, year, note, collaboration?, figure?}
- experience: array of {company, title, dateRange, logo, bullets} (consecutive roles at the same company are grouped)
- education: array of {school, degree, dateRange, achievements}

Publication `figure` fields: {src, srcSmall?, width, height, alt, caption, source?, link?, maxDisplayWidth?}.

## Blog workflow

Posts live in `src/content/blog/` (not in `config.ts`). The file name is the URL slug (`my-post.md` -> `/blog/my-post/`). Front matter:

```yaml
---
title: "Post title"
description: "One or two sentences for lists and link previews."
pubDate: 2026-11-16
updatedDate: 2026-12-01 # optional
draft: true # required; set to false to publish
---
```

1. Create the file with `draft: true` and preview it at `/blog/<slug>/` with `npm run dev` (drafts are labelled "Draft ? local preview only").
2. Set `draft: false` to publish, then `npm run build`. The homepage Blog section (latest 3 posts, last on the page), the `/blog/` index and the nav link appear automatically.
3. `src/content/blog/sample-draft.md` is a layout demo that always stays a draft; delete it whenever you like.