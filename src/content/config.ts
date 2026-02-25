import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['lectures', 'awards', 'press', 'activities']),
    summary: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'news-es': newsCollection,
  'news-ca': newsCollection,
  'news-en': newsCollection,
};
