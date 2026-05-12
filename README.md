# Chase Stephens' Blog

A modern, fast, and minimal blog built with [Gatsby](https://www.gatsbyjs.com/) and [React](https://react.dev/), hosted on [GitHub Pages](https://pages.github.com/).

**Live:** [thethoughtdungeon.com](https://thethoughtdungeon.com/)

## ✨ Features

- ⚡ Fast static site generation with Gatsby
- 📱 Mobile-first responsive design
- 🎨 Dark mode support
- 📰 RSS feed generation
- 📊 Analytics integration (Sentry + Google Analytics)
- 🔍 SEO optimized with sitemaps
- 🧪 Unit tests with Bun test runner
- 🤖 Automated deployments via GitHub Actions

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
bun install

# Start dev server (with hot-reload)
bun start

# Open http://localhost:8000
```

### Create a New Post

```bash
bun run new-post "My Amazing Article Title"
```

This creates a new article with the correct structure and frontmatter.

### Build & Deploy

```bash
# Build for production
bun run build

# Test production build locally
bun run serve

# Deploy to GitHub Pages
bun run deploy
```

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** — Detailed setup, configuration, and deployment guide
- **[Content Guide](./SETUP.md#adding-new-articles)** — How to write and publish posts
- **[Project Structure](./SETUP.md#project-structure)** — What's where in the codebase

## 📋 Commands

| Command | Purpose |
|---------|---------|
| `bun start` | Dev server with hot-reload |
| `bun run build` | Production build |
| `bun run serve` | Test production build |
| `bun run deploy` | Deploy to GitHub Pages |
| `bun run new-post "Title"` | Create new article |
| `bun test` | Run tests |

## 🏗️ Stack

- **Framework:** [Gatsby 5](https://www.gatsbyjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React 18](https://react.dev/)
- **Styling:** [SASS](https://sass-lang.com/)
- **Package Manager:** [Bun](https://bun.sh/)
- **Hosting:** [GitHub Pages](https://pages.github.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Theme:** Based on [Lumen](https://github.com/alxshelepenok/lumen) by [Alexander Shelepenok](https://github.com/alxshelepenok)

## 🤝 Attribution

This blog is built on the excellent [Lumen](https://github.com/alxshelepenok/lumen) theme by [Alexander Shelepenok](https://github.com/alxshelepenok). Thanks to Alexander for creating such a thoughtful and extensible starting point.

## 📄 License

MIT License — see [LICENSE](./LICENSE) file for details.

---

**Want to write? Start here:** `bun run new-post "Your Post Title"`
