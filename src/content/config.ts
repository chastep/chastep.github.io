import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
    socialImage: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    socialImage: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  pages: pagesCollection,
};
