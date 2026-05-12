#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "../..");

// Get title from command line args
const title = process.argv.slice(2).join(" ");

if (!title) {
  console.error("❌ Usage: bun run new-post \"Your Post Title\"");
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, "") // Remove special chars
  .replace(/\s+/g, "-") // Replace spaces with hyphens
  .replace(/-+/g, "-") // Replace multiple hyphens
  .replace(/^-+|-+$/g, ""); // Trim hyphens from ends

if (!slug) {
  console.error("❌ Could not generate slug from title");
  process.exit(1);
}

// Get current date
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const dateStr = `${year}-${month}-${day}`;
const isoDate = now.toISOString();

// Create directory
const postDir = path.join(rootDir, "content", "posts", `${dateStr}---${slug}`);

if (fs.existsSync(postDir)) {
  console.error(`❌ Post directory already exists: ${postDir}`);
  process.exit(1);
}

fs.mkdirSync(postDir, { recursive: true });

// Create frontmatter
const frontmatter = `---
title: "${title}"
date: "${isoDate}"
template: "post"
draft: false
slug: "${slug}"
category: "Blog"
tags:
  - "todo"
description: "Brief description of your post"
---

Your post content goes here. You can use **markdown** and _formatting_.
`;

// Write index.md
const postFile = path.join(postDir, "index.md");
fs.writeFileSync(postFile, frontmatter);

console.log(`✅ Created post: ${postDir}`);
console.log(`📝 Edit file: ${postFile}`);
console.log(`🏷️  Slug: ${slug}`);
console.log(`📅 Date: ${dateStr}`);
console.log("\n💡 Next steps:");
console.log(`  1. Edit ${postFile}`);
console.log("  2. Add tags and description");
console.log("  3. Write your content");
console.log("  4. Set draft: false when ready to publish");
