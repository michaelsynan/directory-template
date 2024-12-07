import { defineCollection } from "@nuxt/content";

export const collections = {
  blogs: defineCollection({
    type: "page",
    source: "blog/*.md",
  }),
};
