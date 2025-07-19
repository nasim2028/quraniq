import DailyHadith from "@/components/app/daily-hadith";
import FeaturesList from "@/components/app/features-list";

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">Welcome to Quraniq</h1>
        <p className="text-lg text-muted-foreground">
          Your AI-powered companion for Islamic knowledge and spiritual growth.
        </p>
      </header>
      
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DailyHadith />
        </div>
        <div>
          <FeaturesList />
        </div>
      </main>
    </div>
  );
}
