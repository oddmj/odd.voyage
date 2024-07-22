import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image().refine(() => true),
      draft: z.boolean().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
