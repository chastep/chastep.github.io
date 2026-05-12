import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export function getPublishedPosts(posts: Post[]): Post[] {
  return posts.filter(post => !post.data.draft);
}

export function groupByCategory(posts: Post[]): Record<string, Post[]> {
  return posts.reduce((acc, post) => {
    const cat = post.data.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(post);
    return acc;
  }, {} as Record<string, Post[]>);
}

export function groupByTag(posts: Post[]): Record<string, Post[]> {
  return posts.reduce((acc, post) => {
    post.data.tags?.forEach(tag => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(post);
    });
    return acc;
  }, {} as Record<string, Post[]>);
}

export function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.data.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAllCategories(posts: Post[]): string[] {
  const categories = new Set<string>();
  posts.forEach(post => {
    categories.add(post.data.category);
  });
  return Array.from(categories).sort();
}
