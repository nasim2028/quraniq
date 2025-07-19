import { quranData } from "@/lib/quran-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function QuranReader() {
  // For now, we only display the first surah.
  // This can be expanded to a full reader.
  const surah = quranData[0];

  return (
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
  );
}
