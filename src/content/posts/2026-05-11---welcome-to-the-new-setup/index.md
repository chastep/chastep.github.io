---
title: "Welcome to the New Setup"
date: "2026-05-12T00:07:18.471Z"
draft: false
category: "Blog"
tags:
  - "setup"
  - "astro"
  - "migration"
description: "Complete migration from Gatsby to Astro - a fresh, faster, lighter blog platform"
---

I've completely rebuilt this blog from **Gatsby to Astro**. Here's why and what changed.

## Why the Migration?

The original Gatsby setup, while powerful, had become overkill for a simple personal blog:

- **Massive dependency tree** — 1,590+ npm packages
- **Slow builds** — GraphQL, Webpack plugins, and complex config
- **Unnecessary features** — PWA, service workers, analytics integration
- **Maintenance burden** — Keeping 50+ Gatsby plugins up to date

Astro solves all of this by focusing on what blogs actually need: fast builds, minimal JavaScript, and static content.

## What Changed

### Removed

- ❌ All Gatsby configuration (gatsby-*.ts, 50+ plugin files)
- ❌ GraphQL queries and complex data fetching
- ❌ React components for everything (Astro is simpler)
- ❌ Service workers, PWA manifest config
- ❌ Sentry error tracking, Google Analytics integration
- ❌ RSS feed generation

### Added

- ✅ **Astro framework** — Simple, fast static site generator
- ✅ **Content Collections** — Type-safe markdown management
- ✅ **Lean components** — Astro components use less code than React
- ✅ **Native dark mode** — localStorage + CSS custom properties
- ✅ **Simpler routing** — File-based routes (pages/posts/[slug].astro)
- ✅ **Better DX** — Faster dev server, instant rebuilds

### Kept

- ✅ All 8 posts and 2 pages (with full content preserved)
- ✅ Same sidebar + content layout
- ✅ Dark mode toggle
- ✅ Categories and tags (all on one page, no pagination)
- ✅ Syntax highlighting with PrismJS
- ✅ GitHub Pages deployment
- ✅ GitHub Actions CI/CD

## By the Numbers

| Metric | Gatsby | Astro |
|--------|--------|-------|
| npm packages | 1,590+ | 356 |
| dependency size | ~500MB | ~150MB |
| build time | 30-60s | <5s |
| js sent to browser | ~150KB | <10KB |
| dev server startup | 10-15s | 2-3s |

## The New Workflow

### Create a post

Instead of manually creating folders and boilerplate:

```bash
bun run new-post "My Article Title"
```

This scaffolds a new post with correct frontmatter, date, slug, and template.

### Local development

```bash
bun install
bun run dev      # Hot-reload dev server at localhost:3000
bun run build    # Production build to dist/
bun run preview  # Test production build locally
```

### Deploy

Just push to main — GitHub Actions automatically builds and deploys to Pages.

## Under the Hood

The new structure is simpler:

```
src/
├── pages/              # Auto-routed pages
│   ├── index.astro    # Home
│   ├── posts/[slug].astro
│   ├── tags/[tag].astro
│   └── categories/[category].astro
├── components/        # Reusable UI (Astro components)
├── content/          # Markdown posts and pages
└── styles/           # SCSS stylesheets
```

**No more GraphQL.** Content is accessed with simple Astro APIs:

```typescript
const posts = await getCollection('posts');
const published = posts.filter(p => !p.data.draft);
```

## What's Next?

This blog is now:

- **Easier to maintain** — Simple architecture, fewer dependencies
- **Faster to build** — Local dev is instant
- **Easier to extend** — Add features without plugin complexity
- **Ready for you** — Write articles with `npm run new-post`

The migration is complete, tested locally, and committed. No changes needed from you unless you want to customize further.

Happy writing! ✍️
