export type Zikr = {
    id: number;
    arabic: string;
    transliteration: string;
    translation: string;
    bengaliMeaning: string;
    virtue: string;
    target: number;
};

export const zikrList: Zikr[] = [
    {
        id: 1,
        arabic: "سُبْحَانَ ٱللَّٰهِ",
        transliteration: "SubhanAllah",
        translation: "Glory be to Allah",
        bengaliMeaning: "আল্লাহ পবিত্র",
        virtue: "Whoever says 'SubhanAllah' 100 times, 1000 good deeds are recorded for him, and 1000 bad deeds are wiped away.",
        target: 33,
    },
    {
        id: 2,
        arabic: "ٱلْحَمْدُ لِلَّٰهِ",
        transliteration: "Alhamdulillah",
        translation: "Praise be to Allah",
        bengaliMeaning: "সমস্ত প্রশংসা আল্লাহর",
        virtue: "'Alhamdulillah' fills the scale, and 'SubhanAllah' and 'Alhamdulillah' fill up what is between the heavens and the earth.",
        target: 33,
    },
    {
        id: 3,
        arabic: "ٱللَّٰهُ أَكْبَرُ",
        transliteration: "Allahu Akbar",
        translation: "Allah is the Greatest",
        bengaliMeaning: "আল্লাহ সর্বশ্রেষ্ঠ",
        virtue: "The most beloved words to Allah are four: SubhanAllah, Alhamdulillah, La ilaha illallah, and Allahu Akbar.",
        target: 34,
    },
    {
        id: 4,
        arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
        transliteration: "La ilaha illallah",
        translation: "There is no god but Allah",
        bengaliMeaning: "আল্লাহ ছাড়া কোন ইলাহ নেই",
        virtue: "The best remembrance is 'La ilaha illallah,' and the best supplication is 'Alhamdulillah.'",
        target: 100,
    },
    {
        id: 5,
        arabic: "أَسْتَغْفِرُ ٱللَّٰهَ",
        transliteration: "Astaghfirullah",
        translation: "I seek forgiveness from Allah",
        bengaliMeaning: "আমি আল্লাহর কাছে ক্ষমা চাই",
        virtue: "Whoever constantly seeks forgiveness, Allah will appoint for him a way out of every distress and a relief from every anxiety.",
        target: 100,
    },
];
