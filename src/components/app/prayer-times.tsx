import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sunrise, Sunset, Moon, Sun, CloudSun, CloudMoon } from "lucide-react";

const prayerTimes = [
    { name: "Fajr", time: "04:30 AM", icon: <CloudMoon className="h-5 w-5 text-accent" /> },
    { name: "Sunrise", time: "06:00 AM", icon: <Sunrise className="h-5 w-5 text-accent" /> },
    { name: "Dhuhr", time: "12:30 PM", icon: <Sun className="h-5 w-5 text-accent" /> },
    { name: "Asr", time: "04:00 PM", icon: <CloudSun className="h-5 w-5 text-accent" /> },
    { name: "Maghrib", time: "06:45 PM", icon: <Sunset className="h-5 w-5 text-accent" /> },
    { name: "Isha", time: "08:15 PM", icon: <Moon className="h-5 w-5 text-accent" /> },
];

export default function PrayerTimes() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Prayer Times</CardTitle>
        <CardDescription>Based on your location.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {prayerTimes.map((prayer, index) => (
            <li key={prayer.name}>
              <div className="flex items-center justify-between text-base">
                <div className="flex items-center gap-3">
                  {prayer.icon}
                  <span>{prayer.name}</span>
                </div>
                <span className="font-medium">{prayer.time}</span>
              </div>
              {index < prayerTimes.length - 1 && <Separator className="mt-3" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
