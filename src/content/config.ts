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

export const collections = {
  projects: projectsCollection,
};
