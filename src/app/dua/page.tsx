import DuaSuggestion from "@/components/app/dua-suggestion";

export default function DuaPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Dua Suggestions
        </h1>
        <p className="text-lg text-muted-foreground">
          In need of guidance? Describe your situation, and let AI suggest a fitting Dua for you.
        </p>
      </header>
      <main>
        <DuaSuggestion />
      </main>
    </div>
  );
}
