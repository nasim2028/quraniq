// src/ai/flows/suggest-dua.ts
'use server';
/**
 * @fileOverview A Dua (supplication) suggestion AI agent.
 *
 * - suggestDua - A function that handles the Dua suggestion process.
 * - SuggestDuaInput - The input type for the suggestDua function.
 * - SuggestDuaOutput - The return type for the suggestDua function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDuaInputSchema = z.object({
  situation: z
    .string()
    .describe("The user's current situation or need for which a Dua is requested."),
  language: z.string().describe("The language of the user's request, e.g., 'English', 'Bengali', 'Arabic'."),
});
export type SuggestDuaInput = z.infer<typeof SuggestDuaInputSchema>;

const SuggestDuaOutputSchema = z.object({
  dua: z.string().describe('A relevant Dua (supplication) for the given situation.'),
  explanation: z
    .string()
    .describe('An explanation of the Dua and its relevance to the situation.'),
});
export type SuggestDuaOutput = z.infer<typeof SuggestDuaOutputSchema>;

export async function suggestDua(input: SuggestDuaInput): Promise<SuggestDuaOutput> {
  return suggestDuaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDuaPrompt',
  input: {schema: SuggestDuaInputSchema},
  output: {schema: SuggestDuaOutputSchema},
  prompt: `You are an Islamic scholar specializing in recommending appropriate duas (supplications) for various situations.

  Based on the user's current situation or need, suggest a relevant Dua and explain its relevance.
  
  IMPORTANT: You must respond in the same language as the user's request, which is {{{language}}}.

  Situation: {{{situation}}}`,
});

const suggestDuaFlow = ai.defineFlow(
  {
    name: 'suggestDuaFlow',
    inputSchema: SuggestDuaInputSchema,
    outputSchema: SuggestDuaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
