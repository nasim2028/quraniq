import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, Search, BookOpenText, Clock, Gem } from "lucide-react";
import type { ReactElement } from "react";
import Link from "next/link";

type Feature = {
    icon: ReactElement;
    title: string;
    description: string;
    href: string;
};

const featureList: Feature[] = [
    {
        icon: <BookHeart className="h-8 w-8 text-primary" />,
        title: "Dua Suggestions",
        description: "Get personalized Dua (supplication) suggestions based on your situation.",
        href: "/dua",
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Quranic Verse Search",
        description: "Search for Quranic verses by topic or keyword to find guidance and inspiration.",
        href: "/search",
    },
    {
        icon: <BookOpenText className="h-8 w-8 text-primary" />,
        title: "Daily Hadith",
        description: "Start your day with a moment of reflection with a new Hadith every day.",
        href: "/",
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Prayer Times",
        description: "View daily prayer times based on your location to stay on track with your prayers.",
        href: "/prayer-times",
    },
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: "Tasbeeh Counter",
        description: "Use the digital tasbeeh to keep track of your zikr and supplications.",
        href: "/tasbeeh",
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
                        <Link href={feature.href} key={index} className="flex">
                            <Card className="flex flex-col w-full hover:border-primary/50 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                    {feature.icon}
                                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-base text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
