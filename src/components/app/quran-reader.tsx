'use client';

import { useState } from "react";
import { quranData, type Surah } from "@/lib/quran-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function QuranReader() {
  const [selectedSurahId, setSelectedSurahId] = useState<string>(quranData[0].id.toString());

  const handleSurahChange = (surahId: string) => {
    setSelectedSurahId(surahId);
  };
  
  const surah = quranData.find(s => s.id.toString() === selectedSurahId) || quranData[0];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
            <CardTitle className="font-headline">Select a Surah</CardTitle>
        </CardHeader>
        <CardContent>
            <Select onValueChange={handleSurahChange} defaultValue={selectedSurahId}>
                <SelectTrigger className="w-full md:w-[280px]">
                    <SelectValue placeholder="Select a Surah" />
                </SelectTrigger>
                <SelectContent>
                    {quranData.map((s) => (
                        <SelectItem key={s.id} value={s.id.toString()}>
                           {s.id}. {s.transliteration} ({s.translation})
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl text-primary">{surah.transliteration}</CardTitle>
          <p className="text-4xl font-bold font-headline">{surah.name}</p>
          <CardDescription className="text-lg">{surah.translation} ({surah.bengaliName})</CardDescription>
          <p className="text-sm text-muted-foreground">Total Verses: {surah.total_verses}</p>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-8 pt-6">
          {surah.verses.map((ayah) => (
            <div key={ayah.id} className="space-y-4">
              <p className="text-right text-3xl leading-relaxed font-arabic">{ayah.text}</p>
              <div className="space-y-2">
                <p className="text-base leading-relaxed">{ayah.translation}</p>
                <p className="text-base leading-relaxed text-muted-foreground">{ayah.bengaliTranslation}</p>
              </div>
              {ayah.id < surah.total_verses && <Separator className="mt-6" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
