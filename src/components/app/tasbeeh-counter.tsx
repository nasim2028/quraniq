
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { RotateCcw, Heart } from 'lucide-react';
import { zikrList, type Zikr } from '@/lib/zikr-data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

const allCategories = ["প্রিয়", ...new Set(zikrList.map(item => item.category))];

export default function TasbeehCounter() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(allCategories[1]);
  const [selectedZikr, setSelectedZikr] = useState<Zikr>(zikrList.filter(z => z.category === allCategories[1])[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem('favoriteZikrs');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('favoriteZikrs', JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  const favoriteZikrList = useMemo(() => {
    return zikrList.filter(zikr => favorites.includes(zikr.id));
  }, [favorites]);

  const filteredZikrList = useMemo(() => {
    if (selectedCategory === "প্রিয়") {
      return favoriteZikrList.length > 0 ? favoriteZikrList : [];
    }
    return zikrList.filter(zikr => zikr.category === selectedCategory);
  }, [selectedCategory, favoriteZikrList]);
  
  useEffect(() => {
    if (filteredZikrList.length > 0) {
        if (!filteredZikrList.find(z => z.id === selectedZikr.id)) {
            handleZikrSelect(filteredZikrList[0]);
        }
    } else if (selectedCategory === "প্রিয়") {
        const fallbackCategory = allCategories.find(c => c !== "প্রিয়");
        if(fallbackCategory) {
            setSelectedCategory(fallbackCategory);
        }
    }
  }, [filteredZikrList, selectedZikr]);


  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const list = category === "প্রিয়" ? favoriteZikrList : zikrList.filter(zikr => zikr.category === category);
    if (list.length > 0) {
      handleZikrSelect(list[0]);
    }
  };

  const handleZikrSelect = (zikr: Zikr) => {
    setSelectedZikr(zikr);
    setCount(0);
  };

  const toggleFavorite = (zikrId: number) => {
    setFavorites(prev => 
      prev.includes(zikrId) 
        ? prev.filter(id => id !== zikrId) 
        : [...prev, zikrId]
    );
  };

  const isFavorite = (zikrId: number) => favorites.includes(zikrId);

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
        <div className="flex justify-between items-center gap-2">
            <Select onValueChange={handleCategoryChange} value={selectedCategory}>
              <SelectTrigger className="w-1/3">
                <SelectValue placeholder="Choose Category" />
              </SelectTrigger>
              <SelectContent>
                {allCategories.map((category) => (
                  <SelectItem key={category} value={category} disabled={category === "প্রিয়" && favoriteZikrList.length === 0}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={(zikrId) => handleZikrSelect(zikrList.find(z => z.id.toString() === zikrId)!)} value={selectedZikr.id.toString()} disabled={filteredZikrList.length === 0}>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder={filteredZikrList.length > 0 ? "Choose Zikr" : "No Zikr in category"} />
              </SelectTrigger>
              <SelectContent>
                  {filteredZikrList.map((zikr) => (
                    <SelectItem key={zikr.id} value={zikr.id.toString()}>
                      {zikr.transliteration}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            
            <Button variant="ghost" size="icon" onClick={() => toggleFavorite(selectedZikr.id)} aria-label="Toggle Favorite">
                <Heart className={cn("h-5 w-5", isFavorite(selectedZikr.id) ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
            </Button>
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
            <span className="text-lg font-mono text-muted-foreground">/ {selectedZikr.target}</span>
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
          <p className="text-center text-sm font-medium">{selectedZikr.bengaliMeaning}</p>
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
