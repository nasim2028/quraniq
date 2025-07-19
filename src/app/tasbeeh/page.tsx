import TasbeehCounter from "@/components/app/tasbeeh-counter";

export default function TasbeehPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Tasbeeh Counter
        </h1>
        <p className="text-lg text-muted-foreground">
          Use the digital tasbeeh to keep track of your zikr and supplications.
        </p>
      </header>
      <main className="flex justify-center">
        <TasbeehCounter />
      </main>
    </div>
  );
}
