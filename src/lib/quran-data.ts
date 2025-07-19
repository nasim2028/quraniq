export type Ayah = {
  id: number;
  text: string; // Arabic text
  translation: string; // English translation
  bengaliTranslation: string; // Bengali translation
};

export type Surah = {
  id: number;
  name: string; // Arabic name
  transliteration: string; // English transliteration
  translation: string; // English meaning of the name
  bengaliName: string; // Bengali name
  total_verses: number;
  verses: Ayah[];
};

export const quranData: Surah[] = [
  {
    id: 1,
    name: "ٱلْفَاتِحَة",
    transliteration: "Al-Fatihah",
    translation: "The Opening",
    bengaliName: "আল-ফাতিহা",
    total_verses: 7,
    verses: [
      {
        id: 1,
        text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        bengaliTranslation: "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।"
      },
      {
        id: 2,
        text: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَالَمِينَ",
        translation: "All praise is due to Allah, Lord of the worlds -",
        bengaliTranslation: "যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।"
      },
      {
        id: 3,
        text: "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        translation: "The Entirely Merciful, the Especially Merciful,",
        bengaliTranslation: "যিনি পরম করুণাময়, অতি দয়ালু।"
      },
      {
        id: 4,
        text: "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
        translation: "Sovereign of the Day of Recompense.",
        bengaliTranslation: "যিনি বিচার দিনের মালিক।"
      },
      {
        id: 5,
        text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translation: "It is You we worship and You we ask for help.",
        bengaliTranslation: "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।"
      },
      {
        id: 6,
        text: "ٱهْدِنَا ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ",
        translation: "Guide us to the straight path -",
        bengaliTranslation: "আমাদেরকে সরল পথ দেখাও,"
      },
      {
        id: 7,
        text: "صِرَاطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّالِّينَ",
        translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        bengaliTranslation: "সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।"
      }
    ]
  }
];
