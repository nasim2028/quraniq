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
  },
  {
    id: 112,
    name: "الإخلاص",
    transliteration: "Al-Ikhlas",
    translation: "The Sincerity",
    bengaliName: "আল-ইখলাস",
    total_verses: 4,
    verses: [
      {
        id: 1,
        text: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        translation: "Say, 'He is Allah, [who is] One,",
        bengaliTranslation: "বলুন, তিনি আল্লাহ, এক,"
      },
      {
        id: 2,
        text: "ٱللَّهُ ٱلصَّمَدُ",
        translation: "Allah, the Eternal Refuge.",
        bengaliTranslation: "আল্লাহ অমুখাপেক্ষী,"
      },
      {
        id: 3,
        text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "He neither begets nor is born,",
        bengaliTranslation: "তিনি কাউকে জন্ম দেননি এবং কেউ তাকে জন্ম দেয়নি,"
      },
      {
        id: 4,
        text: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        translation: "Nor is there to Him any equivalent.'",
        bengaliTranslation: "এবং তাঁর সমতুল্য কেউ নেই।"
      }
    ]
  },
  {
    id: 114,
    name: "الناس",
    transliteration: "An-Nas",
    translation: "The Mankind",
    bengaliName: "আন-নাস",
    total_verses: 6,
    verses: [
      {
        id: 1,
        text: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        translation: "Say, 'I seek refuge in the Lord of mankind,",
        bengaliTranslation: "বলুন, আমি আশ্রয় গ্রহণ করিতেছি মানুষের পালনকর্তার,"
      },
      {
        id: 2,
        text: "مَلِكِ ٱلنَّاسِ",
        translation: "The Sovereign of mankind.",
        bengaliTranslation: "মানুষের অধিপতির,"
      },
      {
        id: 3,
        text: "إِلَـٰهِ ٱلنَّاسِ",
        translation: "The God of mankind,",
        bengaliTranslation: "মানুষের মা’বুদের,"
      },
      {
        id: 4,
        text: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
        translation: "From the evil of the retreating whisperer -",
        bengaliTranslation: "তার অনিষ্ট থেকে, যে কুমন্ত্রণা দেয় ও আত্মগোপন করে,"
      },
      {
        id: 5,
        text: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
        translation: "Who whispers [evil] into the breasts of mankind -",
        bengaliTranslation: "যে কুমন্ত্রণা দেয় মানুষের অন্তরে,"
      },
      {
        id: 6,
        text: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
        translation: "From among the jinn and mankind.'",
        bengaliTranslation: "জ্বিনের মধ্য থেকে অথবা মানুষের মধ্য থেকে।"
      }
    ]
  }
];
