'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';

export default function TasbeehCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
        <div 
            className="w-48 h-48 rounded-full bg-primary/10 border-8 border-primary/20 flex items-center justify-center mb-6"
            aria-live="polite"
        >
          <span className="text-6xl font-bold font-mono text-primary">{count}</span>
        </div>
        <Button 
          onClick={incrementCount} 
          className="w-full h-16 text-2xl rounded-full"
          aria-label="Increment count"
        >
          Count
        </Button>
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
