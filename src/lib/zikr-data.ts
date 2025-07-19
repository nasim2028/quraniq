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
        virtue: "যে ব্যক্তি ১০০ বার 'সুবহানাল্লাহ' পাঠ করবে, তার জন্য ১০০০ নেকি লেখা হবে এবং ১০০০ গুনাহ মুছে ফেলা হবে। (সহিহ মুসলিম)",
        target: 33,
    },
    {
        id: 2,
        arabic: "ٱلْحَمْدُ لِلَّٰهِ",
        transliteration: "Alhamdulillah",
        translation: "Praise be to Allah",
        bengaliMeaning: "সমস্ত প্রশংসা আল্লাহর",
        virtue: "'আলহামদুলিল্লাহ' весов (মিজান) পূর্ণ করে দেয় এবং 'সুবহানাল্লাহ' ও 'আলহামদুলিল্লাহ' আসমান ও জমিনের মধ্যবর্তী স্থান পূর্ণ করে দেয়। (সহিহ মুসলিম)",
        target: 33,
    },
    {
        id: 3,
        arabic: "ٱللَّٰهُ أَكْبَرُ",
        transliteration: "Allahu Akbar",
        translation: "Allah is the Greatest",
        bengaliMeaning: "আল্লাহ সর্বশ্রেষ্ঠ",
        virtue: "আল্লাহর কাছে সবচেয়ে প্রিয় চারটি বাক্য হলো: সুবহানাল্লাহ, আলহামদুলিল্লাহ, লা ইলাহা ইল্লাল্লাহ এবং আল্লাহু আকবার। (সহিহ মুসলিম)",
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
    {
        id: 6,
        arabic: "آيَةُ الْكُرْسِيِّ",
        transliteration: "Ayatul Kursi",
        translation: "The Verse of the Throne",
        bengaliMeaning: "আয়াতুল কুরসি",
        virtue: "যে ব্যক্তি প্রতি ফরয নামাজের পর আয়াতুল কুরসি পাঠ করবে, তার এবং জান্নাতের মধ্যে কেবল মৃত্যুই বাধা থাকবে। (সুনানে নাসায়ী)",
        target: 1,
    },
    {
        id: 7,
        arabic: "سُورَةُ الْإِخْلَاصِ",
        transliteration: "Surah Al-Ikhlas",
        translation: "The Sincerity",
        bengaliMeaning: "সূরা ইখলাস",
        virtue: "রাসূল (সা.) বলেছেন, 'সূরা ইখলাস কুরআনের এক-তৃতীয়াংশের সমান।' সকাল ও সন্ধ্যায় তিনবার পাঠ করলে তা সকল বিপদ থেকে রক্ষা করে।",
        target: 3,
    },
    {
        id: 8,
        arabic: "سُورَةُ الْفَلَقِ",
        transliteration: "Surah Al-Falaq",
        translation: "The Daybreak",
        bengaliMeaning: "সূরা ফালাক",
        virtue: "সকাল ও সন্ধ্যায় তিনবার সূরা ফালাক পাঠ করলে যাবতীয় অনিষ্ট ও জাদু থেকে আল্লাহর আশ্রয় লাভ হয়।",
        target: 3,
    },
    {
        id: 9,
        arabic: "سُورَةُ النَّاسِ",
        transliteration: "Surah An-Nas",
        translation: "The Mankind",
        bengaliMeaning: "সূরা নাস",
        virtue: "সকাল ও সন্ধ্যায় তিনবার সূরা নাস পাঠ করলে শয়তানের কুমন্ত্রণা ও মানুষের অনিষ্ট থেকে সুরক্ষা পাওয়া যায়।",
        target: 3,
    }
];
