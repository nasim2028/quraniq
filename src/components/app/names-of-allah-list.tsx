import { namesOfAllah } from "@/lib/names-of-allah";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NamesOfAllahList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {namesOfAllah.map((name, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{name.transliteration}</CardTitle>
            <p className="text-3xl font-bold text-right font-headline">{name.name}</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-base text-muted-foreground">{name.meaning}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
