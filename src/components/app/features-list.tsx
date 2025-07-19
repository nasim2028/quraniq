import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookHeart, Search, BookOpenText, Clock, Gem } from "lucide-react";
import Link from "next/link";

const featureList = [
    {
        icon: <BookHeart className="h-6 w-6 text-primary" />,
        title: "Dua Suggestions",
        href: "/dua",
    },
    {
        icon: <Search className="h-6 w-6 text-primary" />,
        title: "Quranic Verse Search",
        href: "/search",
    },
    {
        icon: <BookOpenText className="h-6 w-6 text-primary" />,
        title: "Daily Hadith",
        href: "/",
    },
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: "Prayer Times",
        href: "/prayer-times",
    },
    {
        icon: <Gem className="h-6 w-6 text-primary" />,
        title: "Tasbeeh Counter",
        href: "/tasbeeh",
    }
];

export default function FeaturesList() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {featureList.map((feature) => (
                        <li key={feature.title}>
                            <Link href={feature.href} className="flex items-center gap-4 group">
                                {feature.icon}
                                <span className="font-medium group-hover:text-primary transition-colors">{feature.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
