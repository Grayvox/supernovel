import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const releases = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
    schema: z.object({
        title: z.string(),
        publishedOn: z.coerce.date(),
        notes: z.string().optional(),
        audio: z.string().optional()
    })
});

export const collections = { releases };
