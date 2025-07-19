import NamesOfAllahList from "@/components/app/names-of-allah-list";

export default function NamesOfAllahPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          99 Names of Allah
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore the beautiful names of Allah with their meanings and transliterations.
        </p>
      </header>
      <main>
        <NamesOfAllahList />
      </main>
    </div>
  );
}
