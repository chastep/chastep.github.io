# Local Setup & Development

## Prerequisites

- **Bun** (v1.0+) — install from [bun.sh](https://bun.sh)
- **Node.js** (v22+) — for tooling compatibility
- **Git** — for version control

## Quick Start

### 1. Install Dependencies
```bash
bun install
```

### 2. Start Local Development
```bash
bun start
```
This cleans the cache and starts the Gatsby dev server at `http://localhost:8000`.

### 3. View Your Site
Open http://localhost:8000 in your browser. Changes to content and code will hot-reload automatically.

## Adding New Articles

### Create a New Post
```bash
bun run new-post "Your Article Title"
```

This scaffolds a new post with the correct structure and frontmatter. Posts go in `content/posts/`.

### Post Structure
Posts are in `content/posts/YYYY-MM-DD---slug/`:
```
content/posts/2025-05-11---my-new-article/
├── index.md          # Main article content
└── image.png         # Optional: featured image or media
```

### Frontmatter Fields
```yaml
---
title: "Article Title"
date: "2025-05-11T10:30:00Z"       # ISO 8601 format
template: "post"
draft: false                         # Set to true to hide from site
slug: "unique-url-slug"
category: "Blog"                     # Category for organization
tags:
  - "tag1"
  - "tag2"
description: "Brief one-liner for previews and feeds"
socialImage: "./image.png"           # Optional: social sharing image
---
```

## Configuration

Edit `content/config.json` to customize:
- Site title, description, copyright
- Navigation menu
- Author info and social links
- Google Analytics ID (replace `"foobar"` with your tracking ID)

## Building for Production

### Local Build
```bash
bun run build
```
Outputs static site to `public/` directory.

### Test Production Build
```bash
bun run serve
```
Serves the built site locally for testing (usually on port 8000).

## Deploying to GitHub Pages

The site auto-deploys via GitHub Actions when you push to `main`:
1. **Release workflow** creates a new version (semantic versioning)
2. **Deployment workflow** builds and deploys to GitHub Pages

To manually deploy:
```bash
bun run deploy
```

> **Note:** Ensure `content/config.json` has the correct `url` for your site (e.g., `https://yourusername.github.io/` or your custom domain).

## GitHub Pages Setup

This repo is configured for GitHub Pages with these settings:

1. **Repository**: Set to public
2. **GitHub Pages Source**: Deploy from branch `gh-pages`
3. **Domain**: Currently set to `thethoughtdungeon.com` in config

To use GitHub Pages at `yourusername.github.io`:
- Update `url` in `content/config.json` to `https://yourusername.github.io/`
- Update `pathPrefix` if deploying to a subdirectory (e.g., `/my-repo/`)

## Useful Commands

| Command | Purpose |
|---------|---------|
| `bun start` | Dev server with hot-reload |
| `bun run build` | Production build |
| `bun run serve` | Test production build locally |
| `bun run deploy` | Manual deployment to gh-pages |
| `bun run new-post "Title"` | Create new article |
| `bun test` | Run tests |
| `bun run clean` | Clear cache and build artifacts |

## Troubleshooting

### Changes not showing up?
1. Stop the dev server (Ctrl+C)
2. Run `bun run clean`
3. Run `bun start` again

### Build fails?
- Check `gatsby-config.ts` and plugin config
- Ensure all images/media in posts exist
- Verify frontmatter YAML is valid

### Deploy issues?
- Confirm `GITHUB_TOKEN` has write access (GitHub Actions > Workflow permissions)
- Check deployment logs in GitHub Actions tab
- Verify branch protection rules allow deployments

## Project Structure

```
.
├── content/              # Articles and pages (markdown)
│   ├── posts/           # Blog articles
│   ├── pages/           # Static pages (about, contact)
│   ├── logo.png         # Site logo
│   └── config.json      # Site configuration
├── src/                 # React components and styling
│   ├── components/      # Reusable UI components
│   ├── templates/       # Page templates
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
│   └── styles/         # Global and component styles
├── internal/            # Build scripts and testing utilities
├── .github/workflows/   # CI/CD automation
├── gatsby-*.ts          # Gatsby configuration files
└── package.json         # Dependencies and scripts
```

## Next Steps

- Customize your site in `content/config.json`
- Update author info and social links
- Add your Google Analytics ID
- Write your first post: `bun run new-post "My First Post"`
- Deploy and share!
