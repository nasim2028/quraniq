'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestDua, SuggestDuaOutput } from '@/ai/flows/suggest-dua';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, AlertTriangle, Sparkles } from 'lucide-react';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  situation: z.string().min(10, {
    message: 'Please describe your situation in at least 10 characters.',
  }),
});

export default function DuaSuggestion() {
  const [submission, setSubmission] = useState<{
    loading: boolean;
    data: SuggestDuaOutput | null;
    error: string | null;
  }>({ loading: false, data: null, error: null });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      situation: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmission({ loading: true, data: null, error: null });
    try {
      const lang = document.documentElement.lang || 'en';
      const result = await suggestDua({ situation: values.situation, language: lang });
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
          <CardTitle className="font-headline">Get a Dua Suggestion</CardTitle>
          <CardDescription>Describe your current situation or feeling.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="situation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>My situation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I'm feeling anxious about an upcoming exam, or I'm grateful for a recent blessing..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={submission.loading}>
                {submission.loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Suggest Dua
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
        <Card className="bg-gradient-to-br from-card to-secondary/50">
          <CardHeader>
             <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-accent" />
                <CardTitle className="font-headline text-primary">Your Suggested Dua</CardTitle>
             </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold font-headline mb-2 text-lg">Dua:</h3>
              <blockquote className="border-l-4 border-accent pl-4 italic text-lg bg-background/50 p-4 rounded-md">
                {submission.data.dua}
              </blockquote>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold font-headline mb-2 text-lg">Explanation:</h3>
              <p className="text-base leading-relaxed">
                {submission.data.explanation}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
