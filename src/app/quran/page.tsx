import QuranReader from "@/components/app/quran-reader";

export default function QuranPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          The Holy Quran
        </h1>
        <p className="text-lg text-muted-foreground">
          Read, search, and listen to the Quran.
        </p>
      </header>
      <main>
        <QuranReader />
      </main>
    </div>
  );
}
