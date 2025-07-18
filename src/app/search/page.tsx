import VerseSearch from "@/components/app/verse-search";

export default function SearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Search Quranic Verses
        </h1>
        <p className="text-lg text-muted-foreground">
          Find guidance and inspiration. Enter a topic or keyword to discover relevant verses from the Holy Quran.
        </p>
      </header>
      <main>
        <VerseSearch />
      </main>
    </div>
  );
}
