'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { searchVerse, SearchVerseOutput } from '@/ai/flows/search-verse';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  query: z.string().min(3, {
    message: 'Please enter at least 3 characters.',
  }),
});

export default function VerseSearch() {
  const [submission, setSubmission] = useState<{
    loading: boolean;
    data: SearchVerseOutput | null;
    error: string | null;
  }>({ loading: false, data: null, error: null });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmission({ loading: true, data: null, error: null });
    try {
      const result = await searchVerse(values);
      setSubmission({ loading: false, data: result, error: null });
    } catch (error) {
      console.error(error);
      setSubmission({ loading: false, data: null, error: 'An unexpected error occurred. Please try again.' });
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Find Verses</CardTitle>
          <CardDescription>What topic are you interested in?</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic or Keyword</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., patience, gratitude, prayer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={submission.loading}>
                {submission.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Search
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {submission.error && (
        <Card className="border-destructive">
          <CardHeader className="flex flex-row items-center gap-3 space-y-0">
             <AlertTriangle className="h-6 w-6 text-destructive" />
            <CardTitle className="text-destructive font-headline">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{submission.error}</p>
          </CardContent>
        </Card>
      )}

      {submission.data && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base">{submission.data.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Relevant Verses</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {submission.data.verses.map((verse, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left">Verse {index + 1}</AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {verse}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
