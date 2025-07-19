import PrayerTimes from "@/components/app/prayer-times";

export default function PrayerTimesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Prayer Times
        </h1>
        <p className="text-lg text-muted-foreground">
          View daily prayer times based on your location to stay on track with your prayers.
        </p>
      </header>
      <main className="flex justify-center">
        <div className="w-full max-w-md">
          <PrayerTimes />
        </div>
      </main>
    </div>
  );
}
