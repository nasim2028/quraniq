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
        virtue: "যে ব্যক্তি ১০০ বার 'সুবহানাল্লাহ' পাঠ করবে, তার জন্য ১০০০ নেকি লেখা হবে এবং ১০০০ গুনাহ মুছে ফেলা হবে।",
        target: 33,
    },
    {
        id: 2,
        arabic: "ٱلْحَمْدُ لِلَّٰهِ",
        transliteration: "Alhamdulillah",
        translation: "Praise be to Allah",
        bengaliMeaning: "সমস্ত প্রশংসা আল্লাহর",
        virtue: "'আলহামদুলিল্লাহ' весов (মিজান) পূর্ণ করে দেয় এবং 'সুবহানাল্লাহ' ও 'আলহামদুলিল্লাহ' আসমান ও জমিনের মধ্যবর্তী স্থান পূর্ণ করে দেয়।",
        target: 33,
    },
    {
        id: 3,
        arabic: "ٱللَّٰهُ أَكْبَرُ",
        transliteration: "Allahu Akbar",
        translation: "Allah is the Greatest",
        bengaliMeaning: "আল্লাহ সর্বশ্রেষ্ঠ",
        virtue: "আল্লাহর কাছে সবচেয়ে প্রিয় চারটি বাক্য হলো: সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ এবং আল্লাহু আকবার।",
        target: 34,
    },
    {
        id: 4,
        arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
        transliteration: "La ilaha illallah",
        translation: "There is no god but Allah",
        bengaliMeaning: "আল্লাহ ছাড়া কোন ইলাহ নেই",
        virtue: "সর্বশ্রেষ্ঠ জিকির হলো 'লা ইলাহা ইল্লাল্লাহ' এবং সর্বশ্রেষ্ঠ দোয়া হলো 'আলহামদুলিল্লাহ'।" ,
        target: 100,
    },
    {
        id: 5,
        arabic: "أَسْتَغْفِرُ ٱللَّٰهَ",
        transliteration: "Astaghfirullah",
        translation: "I seek forgiveness from Allah",
        bengaliMeaning: "আমি আল্লাহর কাছে ক্ষমা চাই",
        virtue: "যে ব্যক্তি নিয়মিত ইস্তেগফার করে, আল্লাহ তাকে সকল সংকট থেকে উত্তরণের পথ বের করে দেন এবং সকল দুশ্চিন্তা থেকে মুক্তি দেন।",
        target: 100,
    },
];
