'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, ChevronDown } from 'lucide-react';
import { zikrList, type Zikr } from '@/lib/zikr-data';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '../ui/separator';

export default function TasbeehCounter() {
  const [selectedZikr, setSelectedZikr] = useState<Zikr>(zikrList[0]);
  const [count, setCount] = useState(0);

  const handleZikrSelect = (zikr: Zikr) => {
    setSelectedZikr(zikr);
    setCount(0); // Reset count when a new zikr is selected
  };

  const incrementCount = () => {
    if (count < selectedZikr.target) {
      setCount(count + 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };
  
  const progress = (count / selectedZikr.target) * 100;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="font-headline text-2xl text-primary">Tasbeeh</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Choose Zikr
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              {zikrList.map((zikr) => (
                <DropdownMenuItem key={zikr.id} onClick={() => handleZikrSelect(zikr)}>
                  {zikr.transliteration}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription>Selected Zikr: {selectedZikr.transliteration}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
        <div 
            className="relative w-48 h-48 rounded-full bg-primary/10 border-8 border-primary/20 flex items-center justify-center"
            aria-live="polite"
        >
          <div 
            className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-accent"
            style={{ 
                clipPath: `inset(0% ${100 - progress}% 0% 0%)`,
                transition: 'clip-path 0.3s ease-in-out'
            }}
          />
          <div className="z-10 text-center">
            <span className="text-5xl font-bold font-mono text-primary">{count}</span>
            <span className="text-lg font-mono text-primary-foreground">/ {selectedZikr.target}</span>
          </div>
        </div>
        <Button 
          onClick={incrementCount} 
          className="w-full h-16 text-2xl rounded-full"
          aria-label="Increment count"
          disabled={count >= selectedZikr.target}
        >
          {selectedZikr.transliteration}
        </Button>
         <Card className="w-full bg-secondary/50 p-4 mt-4">
          <p className="text-center font-bold text-lg font-arabic">{selectedZikr.arabic}</p>
          <p className="text-center text-sm text-muted-foreground">{selectedZikr.translation}</p>
          <Separator className="my-2"/>
          <p className="text-xs text-center italic">"{selectedZikr.virtue}"</p>
        </Card>
      </CardContent>
      <CardFooter className="justify-center p-4 border-t">
        <Button variant="ghost" onClick={resetCount} aria-label="Reset count">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
