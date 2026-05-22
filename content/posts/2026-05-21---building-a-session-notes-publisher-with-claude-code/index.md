---
title: "Building a Session Notes Publisher with Claude Code"
date: "2026-05-21T22:30:00.000Z"
template: "post"
draft: false
slug: "building-a-session-notes-publisher-with-claude-code"
category: "Engineering"
tags:
  - "claude-code"
  - "tools"
  - "github-pages"
  - "automation"
description: "How I built a Claude Code plugin that captures session summaries and publishes them as shareable pages at notes.thethoughtdungeon.com"
---

One thing I kept running into with Claude Code: I'd have a long, productive session — working through an architecture decision, debugging something gnarly, scaffolding a new feature — and then it would just... end. The context window closes, the conversation compresses, and whatever was figured out lives in a commit message or a half-remembered Slack message.

I wanted a way to capture those sessions as shareable, permanent notes. So I built one.

## What I Built

**`claude-session-notes`** is a Claude Code plugin that adds a `/notes` command to any session. Run it and Claude synthesizes the conversation into a structured document — Summary, Key Topics, Decisions & Insights, Action Items, Code Snippets — then generates a self-contained HTML file and optionally deploys it to GitHub Pages.

The result is a permanent URL: `notes.thethoughtdungeon.com/{uuid}`.

The page itself has a few nice touches: toggle between rendered HTML and raw markdown, a copy-to-clipboard button, dark/light mode via `prefers-color-scheme`, and zero external dependencies. The HTML file works offline.

```
/notes
/notes My Custom Title
/notes --deploy <uuid>
```

## The Architecture

The plugin is domain-agnostic — it wraps any domain you own, not just this blog. On first run it walks you through setup: your domain, your GitHub username, a repo name. It then provides the one DNS CNAME record you need to add, and optionally creates the GitHub repo for you.

After that, deployment is fully automated. The deploy script uses the GitHub Contents API via the `gh` CLI to upload files without ever cloning a repo:

```javascript
const body = { message, content: Buffer.from(content).toString('base64'), branch, sha };
writeFileSync('/tmp/gh-upload-body.json', JSON.stringify(body));
execSync(`gh api repos/${user}/${repo}/contents/${path} --method PUT --input /tmp/gh-upload-body.json`);
```

Writing the base64-encoded content to a temp file before piping it to `gh api` avoids shell argument length limits — something you only discover when your notes have a lot of code snippets.

Each deploy also maintains a `manifest.json` in the repo — a machine-readable index of every published note. The `index.html` listing page is regenerated from the manifest on every deploy, so `notes.thethoughtdungeon.com` always shows an up-to-date list.

## The HTML Generation

One design goal was zero external dependencies. No CDN, no npm install, no runtime. The generate script uses only Node.js built-ins and includes a minimal inline markdown-to-HTML converter for the specific output structure it produces.

Both the rendered HTML and the raw markdown are embedded in the output file. The toggle is just JavaScript swapping `display: none` between two divs — no parsing at runtime:

```javascript
function toggleView() {
  showingHtml = !showingHtml;
  document.getElementById('html-view').style.display = showingHtml ? 'block' : 'none';
  document.getElementById('md-view').style.display   = showingHtml ? 'none'  : 'block';
  document.getElementById('btn-toggle').textContent  = showingHtml ? 'show markdown' : 'show rendered';
}
```

## What I Learned About Claude Code Plugins

This was also my first time building a Claude Code plugin from scratch, and a few things surprised me.

**`~/.claude/commands/` is the simplest path.** Markdown files in `~/.claude/commands/` become user-level slash commands immediately in any new session — no plugin registration, no cache management. The plugin system (`installed_plugins.json`, cache directories) is what the marketplace uses, but for a personal tool, the commands directory is all you need.

**`commands/` vs `skills/`.** Files in a plugin's `commands/` directory create slash commands. Files in `skills/` subdirectories are context-triggered — Claude reads them automatically when the task matches, but they don't show up in the slash command autocomplete. I built the full workflow into `commands/notes.md`.

**The cache is managed.** I tried manually placing files in `~/.claude/plugins/cache/` and Claude Code kept cleaning them up. The right approach is either going through the marketplace install flow or just using `~/.claude/commands/` directly.

## The Note That Published Itself

This plugin's first published note is the session where we built the plugin. You can read it at [notes.thethoughtdungeon.com/2026-05-22-c13aca7d](https://notes.thethoughtdungeon.com/2026-05-22-c13aca7d) — the full summary of the session, including the decisions made along the way and the code snippets that ended up in the final implementation.

The plugin is open source at [github.com/chastep/claude-session-notes](https://github.com/chastep/claude-session-notes).
