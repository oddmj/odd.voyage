import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      draft: z.boolean().optional(),
      publishDate: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
