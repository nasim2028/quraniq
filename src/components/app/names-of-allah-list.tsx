import { namesOfAllah } from "@/lib/names-of-allah";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export default function NamesOfAllahList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {namesOfAllah.map((name, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">{name.transliteration}</CardTitle>
            <p className="text-3xl font-bold text-right font-headline">{name.name}</p>
          </CardHeader>
          <CardContent className="flex-grow space-y-3">
            <div>
                <p className="text-base font-medium">{name.bengaliMeaning}</p>
                <p className="text-sm text-muted-foreground">{name.meaning}</p>
            </div>
            <Separator />
            <p className="text-base text-muted-foreground italic leading-relaxed">
              "{name.explanation}"
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
