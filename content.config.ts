import { defineCollection, z } from '@nuxt/content'

export const collections = {
  blogs: defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
      tags: z.array(z.string()),
      date: z.date(),
      category: z.string(),
      time: z.number(),
      image: z.string(),
    }),
  }),
    trainers: defineCollection({
    type: 'page',
    source: 'trainers/*.md',
    schema: z.object({
      tags: z.array(z.string()),
      date: z.date(),
      category: z.string(),
      time: z.number(),
      image: z.string(),
    }),
  }),
}
