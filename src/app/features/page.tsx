import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, Search, BookOpenText, Clock } from "lucide-react";
import type { ReactElement } from "react";

type Feature = {
    icon: ReactElement;
    title: string;
    description: string;
};

const featureList: Feature[] = [
    {
        icon: <BookHeart className="h-8 w-8 text-primary" />,
        title: "Dua Suggestions",
        description: "Get personalized Dua (supplication) suggestions based on your situation.",
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Quranic Verse Search",
        description: "Search for Quranic verses by topic or keyword to find guidance and inspiration.",
    },
    {
        icon: <BookOpenText className="h-8 w-8 text-primary" />,
        title: "Daily Hadith",
        description: "Start your day with a moment of reflection with a new Hadith every day.",
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Prayer Times",
        description: "View daily prayer times based on your location to stay on track with your prayers.",
    },
];

export default function FeaturesPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
                    Features of Quraniq
                </h1>
                <p className="text-lg text-muted-foreground">
                    Discover the tools and resources available to enhance your spiritual journey.
                </p>
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featureList.map((feature, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                {feature.icon}
                                <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-base text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
