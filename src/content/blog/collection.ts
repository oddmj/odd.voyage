import { getCollection } from "astro:content";

export const getPublishedBlogEntries = async () => {
  return await getCollection("blog", ({ data }) => {
    if (import.meta.env.PROD) {
      return !data.draft;
    }

    return true;
  });
};
