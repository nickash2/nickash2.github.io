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

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Publications, Experience, Teaching, Education, Header, Footer), plus shared building blocks: `Section.astro` (section shell + heading), `EntryCard.astro` (logo/title/date/bullets card, used by Education), `SocialLinks.astro` (icon links, shown only for configured socials), `Figure.astro` (white "paper plate" figure with responsive `srcset` and mono caption)
- **Figures** (`public/figures/`): WebP figures taken from Nicholas's own papers (never invented imagery), each with a `-<width>.webp` small variant; referenced from `heroFigure` and `publications[].figure` in the config
- **Section order**: Hero, Publications, About, Projects, Experience, Teaching, Education. Experience renders as a company-grouped timeline: bullets are always in the DOM and visible without JS/under reduced motion; JS adds a scroll progress rail, highlights the active role and reveals bullets as they enter the viewport
- **Navigation** (`src/navItems.ts`): Single list of section links used by both Header and Footer
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
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
- teaching: array of {role, institution, dateRange, logo, courses, responsibilities} (optional; Teaching section and nav link hide when empty)
- education: array of {school, degree, dateRange, achievements}