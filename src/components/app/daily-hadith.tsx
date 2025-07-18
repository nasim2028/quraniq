'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { hadiths, type Hadith } from '@/lib/hadiths';
import { RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';

export default function DailyHadith() {
  const [hadith, setHadith] = useState<Hadith | null>(null);

  const getRandomHadith = () => {
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    setHadith(hadiths[randomIndex]);
  };
  
  useEffect(() => {
    getRandomHadith();
  }, []);

  if (!hadith) {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Loading Hadith...</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="h-8 w-full animate-pulse rounded-md bg-muted"></div>
                    <div className="h-4 w-1/4 animate-pulse rounded-md bg-muted"></div>
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Hadith of the Day</CardTitle>
        <CardDescription>A moment for reflection.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <blockquote className="border-l-4 border-accent pl-4 italic text-lg">
          "{hadith.text}"
        </blockquote>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm font-medium text-muted-foreground">{hadith.source}</p>
        <Button variant="ghost" size="icon" onClick={getRandomHadith} aria-label="Get another hadith">
            <RefreshCw className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
