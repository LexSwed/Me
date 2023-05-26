import { z, defineCollection } from "astro:content";

const collection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      summary: z.string(),
      tags: z.array(z.string()),
      topic: topic,
      poster: image(),
      posterAlt: z.string(),
      publishDate: z.date(),
      pinned: z.string().optional(),
    }),
});

export const collections = {
  feed: collection,
};

const topic = z.enum(["web", "fxtrot"]);

export type Topic = z.infer<typeof topic>;

export const topicColor = new Map<Topic, `#${string}`>([
  ["fxtrot", "#0ea5e9"],
  ["web", "#0891b2"],
]);
