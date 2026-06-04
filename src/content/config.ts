import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    summary_en: z.string().optional(),
    body_en: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: z.string().optional(),
  }),
})

export const collections = { projects }
