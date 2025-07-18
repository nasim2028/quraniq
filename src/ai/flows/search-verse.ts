// src/ai/flows/search-verse.ts
'use server';
/**
 * @fileOverview A Quranic verse search AI agent.
 *
 * - searchVerse - A function that handles the verse search process.
 * - SearchVerseInput - The input type for the searchVerse function.
 * - SearchVerseOutput - The return type for the searchVerse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SearchVerseInputSchema = z.object({
  query: z.string().describe('The keyword or topic to search for in the Quran.'),
  language: z.string().describe("The language of the user's request, e.g., 'English', 'Bengali', 'Arabic'."),
});
export type SearchVerseInput = z.infer<typeof SearchVerseInputSchema>;

const SearchVerseOutputSchema = z.object({
  verses: z
    .array(z.string())
    .describe('The relevant Quranic verses found based on the search query.'),
  summary: z.string().describe('A summary of the verses found.'),
});
export type SearchVerseOutput = z.infer<typeof SearchVerseOutputSchema>;

export async function searchVerse(input: SearchVerseInput): Promise<SearchVerseOutput> {
  return searchVerseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'searchVersePrompt',
  input: {schema: SearchVerseInputSchema},
  output: {schema: SearchVerseOutputSchema},
  prompt: `You are a Quranic expert. Find the verses related to the query.

Query: {{{query}}}

Return the verses and a summary of the verses found.

IMPORTANT: You must respond in the same language as the user's request, which is {{{language}}}.
`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const searchVerseFlow = ai.defineFlow(
  {
    name: 'searchVerseFlow',
    inputSchema: SearchVerseInputSchema,
    outputSchema: SearchVerseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
