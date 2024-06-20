import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    language: z.enum(["Typescript", "Javascript", "Golang", "C#"]),
    framework: z
      .enum(["React", "Vue", "Angular", "Svelte", "Astro", ".NET"])
      .optional(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.preprocess(
      (arg) => (typeof arg === "string" ? new Date(arg) : arg),
      z.date()
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
