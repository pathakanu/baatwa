export type Lang = "en" | "hi";

export interface NavT {
  links: [string, string, string];
  linkHrefs: [string, string, string];
  signin: string;
  postTrip: string;
}

export interface DriverHeadline {
  line1: string;
  pre: string;
  orange: string;
  post: string;
}

export interface Translations {
  nav: NavT;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
    pills: [string, string, string];
  };
  trust: {
    eyebrow: string;
    title: string;
    cards: { label: string; desc: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; desc: string }[];
  };
  drivers: {
    eyebrow: string;
    headline: DriverHeadline;
    sub: string;
    benefits: [string, string, string];
    cta1: string;
    cta2: string;
  };
  proof: {
    stats: { value: string; desc: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    cards: { title: string; desc: string; badge: string }[];
  };
  cta: {
    headline: string;
    sub: string;
    btn1: string;
    btn2: string;
    appComingSoon: string;
    appStore: string;
    playStore: string;
  };
  footer: {
    tagline: string;
    col1: string;
    col2: string;
    links1: [string, string, string, string];
    links2: [string, string, string, string];
    copy: string;
    privacy: string;
    terms: string;
  };
}

const en: Translations = {
  nav: {
    links: ["How it works", "For drivers", "Why Baatwa"],
    linkHrefs: ["#how-it-works", "#for-drivers", "#why-baatwa"],
    signin: "Sign in",
    postTrip: "Post a trip",
  },
  hero: {
    eyebrow: "India's gig marketplace for fleet owners",
    headline: "Verified drivers for your trucks. Tracked end to end.",
    sub: "Baatwa connects Indian fleet owners with KYC-verified, GPS-tracked drivers for individual trip gigs. No contracts. No idle trucks.",
    cta1: "Find drivers →",
    cta2: "Drive with Baatwa",
    pills: ["KYC Verified", "Live GPS", "Escrow Pay"],
  },
  trust: {
    eyebrow: "Built on trust",
    title: "Your truck, never out of your control.",
    cards: [
      {
        label: "Identity",
        desc: "Aadhaar & photo ID checked before any driver joins the platform.",
      },
      {
        label: "Competence",
        desc: "Commercial licence, endorsements, and driving record verified.",
      },
      {
        label: "Accountability",
        desc: "Every trip rated and recorded. Performance history always visible.",
      },
      {
        label: "Live tracking",
        desc: "Real-time GPS shared with you from ignition to delivery.",
      },
      {
        label: "Escrow payout",
        desc: "Payment held in escrow and released only on confirmed delivery.",
      },
    ],
  },
  how: {
    eyebrow: "For fleet owners",
    title: "From zero to gig in minutes.",
    steps: [
      {
        title: "Post a trip",
        desc: "Share your route, date, truck type, and load. Takes under 3 minutes.",
      },
      {
        title: "Matched with a vetted driver",
        desc: "We surface KYC-verified drivers in your area. You review their profile and confirm.",
      },
      {
        title: "Digital handover",
        desc: "Driver onboards digitally — truck checklist, photo verification, trip document sign-off.",
      },
      {
        title: "Track and pay",
        desc: "Watch the trip live. Escrow released once you confirm delivery. No cash, no chase.",
      },
    ],
  },
  drivers: {
    eyebrow: "For drivers",
    headline: {
      line1: "Drive. Earn.",
      pre: "Your",
      orange: "baatwa",
      post: "always full.",
    },
    sub: "Join thousands of verified drivers earning per trip. No boss, no fixed schedule — just you, your licence, and your next destination.",
    benefits: [
      "Weekly payouts straight to your bank — no middlemen.",
      "KYC done once. Work gigs across the entire network.",
      "Trip insurance on every gig, so you always ride safe.",
    ],
    cta1: "Register as driver →",
    cta2: "Join on WhatsApp",
  },
  proof: {
    stats: [
      {
        value: "100% KYC-verified",
        desc: "Every driver checked before their very first trip on the platform.",
      },
      {
        value: "Live GPS on every trip",
        desc: "Fleet owners track from ignition to final delivery in real time.",
      },
      {
        value: "Escrow-backed payouts",
        desc: "Driver paid only when you confirm delivery. Your money is safe.",
      },
    ],
  },
  why: {
    eyebrow: "Owner protection",
    title: "Protected. Only when you book on Baatwa.",
    cards: [
      {
        title: "Escrow payment",
        desc: "Funds are held securely until you confirm delivery is complete. You never pay before the job is done.",
        badge: "Only on Baatwa",
      },
      {
        title: "Insurance coverage",
        desc: "Every trip on Baatwa comes with accident and cargo insurance — zero extra paperwork needed from you.",
        badge: "Only on Baatwa",
      },
      {
        title: "Dispute resolution",
        desc: "Any issue resolved within 48 hours by our dedicated support team. You get a case number, not a chat bot.",
        badge: "Only on Baatwa",
      },
      {
        title: "Verified history",
        desc: "Full trip history, ratings, and incidents on record for every driver. No surprises, no unknowns.",
        badge: "Only on Baatwa",
      },
    ],
  },
  cta: {
    headline: "Your trucks shouldn't sit idle.",
    sub: "Post a trip in under 3 minutes. Matched with a verified, GPS-tracked driver — every single time.",
    btn1: "Post your first trip →",
    btn2: "Find gigs near you",
    appComingSoon: "Coming soon",
    appStore: "App Store",
    playStore: "Google Play",
  },
  footer: {
    tagline: "Verified drivers for your trucks. Tracked end to end.",
    col1: "Platform",
    col2: "Company",
    links1: ["How it works", "Why Baatwa", "Post a trip", "Drive with us"],
    links2: ["About", "Safety", "Careers", "Contact"],
    copy: "© 2026 Baatwa. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

const hi: Translations = {
  nav: {
    links: ["कैसे काम करता है", "ड्राइवरों के लिए", "क्यों बाटवा"],
    linkHrefs: ["#how-it-works", "#for-drivers", "#why-baatwa"],
    signin: "साइन इन",
    postTrip: "ट्रिप पोस्ट करें",
  },
  hero: {
    eyebrow: "फ्लीट मालिकों के लिए भारत का गिग मार्केटप्लेस",
    headline:
      "आपके ट्रकों के लिए सत्यापित ड्राइवर। शुरू से अंत तक ट्रैक।",
    sub: "बाटवा भारतीय फ्लीट मालिकों को KYC-सत्यापित, GPS-ट्रैक ड्राइवरों से जोड़ता है — एक-एक ट्रिप के लिए। कोई कॉन्ट्रैक्ट नहीं। कोई खाली ट्रक नहीं।",
    cta1: "ड्राइवर खोजें →",
    cta2: "बाटवा के साथ ड्राइव करें",
    pills: ["KYC सत्यापित", "लाइव GPS", "एस्क्रो पेमेंट"],
  },
  trust: {
    eyebrow: "विश्वास पर बना",
    title: "आपका ट्रक, हमेशा आपके नियंत्रण में।",
    cards: [
      {
        label: "पहचान",
        desc: "आधार और फोटो ID की जाँच हर ड्राइवर की पहली ट्रिप से पहले।",
      },
      {
        label: "योग्यता",
        desc: "कमर्शियल लाइसेंस, एंडोर्समेंट और ड्राइविंग रिकॉर्ड सत्यापित।",
      },
      {
        label: "जवाबदेही",
        desc: "हर ट्रिप रेट और रिकॉर्ड। परफॉर्मेंस इतिहास हमेशा दिखता है।",
      },
      {
        label: "लाइव ट्रैकिंग",
        desc: "इग्निशन से डिलीवरी तक रियल-टाइम GPS।",
      },
      {
        label: "एस्क्रो पेआउट",
        desc: "पेमेंट एस्क्रो में रहता है, डिलीवरी पुष्टि के बाद ही रिलीज।",
      },
    ],
  },
  how: {
    eyebrow: "फ्लीट मालिकों के लिए",
    title: "मिनटों में, ट्रिप से कमाई तक।",
    steps: [
      {
        title: "ट्रिप पोस्ट करें",
        desc: "रूट, तारीख, ट्रक का प्रकार और लोड डालें। 3 मिनट से भी कम।",
      },
      {
        title: "सत्यापित ड्राइवर से मिलान",
        desc: "हम आपके एरिया के KYC-सत्यापित ड्राइवर दिखाते हैं। प्रोफाइल देखें, कन्फर्म करें।",
      },
      {
        title: "डिजिटल हैंडओवर",
        desc: "ड्राइवर डिजिटल तरीके से ऑनबोर्ड होता है — चेकलिस्ट, फोटो वेरिफिकेशन, दस्तावेज।",
      },
      {
        title: "ट्रैक करें और भुगतान करें",
        desc: "ट्रिप लाइव देखें। डिलीवरी कन्फर्म करने पर पेमेंट रिलीज। नकद नहीं, झंझट नहीं।",
      },
    ],
  },
  drivers: {
    eyebrow: "ड्राइवरों के लिए",
    headline: {
      line1: "चलाओ। कमाओ।",
      pre: "तुम्हारा",
      orange: "बाटवा",
      post: "हमेशा भरा।",
    },
    sub: "हजारों सत्यापित ड्राइवरों से जुड़ें जो प्रति ट्रिप कमा रहे हैं। कोई बॉस नहीं, कोई फिक्स शेड्यूल नहीं — बस आप, आपका लाइसेंस और अगली मंजिल।",
    benefits: [
      "हर हफ्ते पेआउट सीधे बैंक में — कोई बिचौलिया नहीं।",
      "KYC एक बार करें। पूरे नेटवर्क में कहीं भी गिग करें।",
      "हर गिग पर ट्रिप बीमा — आप हमेशा सुरक्षित।",
    ],
    cta1: "ड्राइवर के रूप में रजिस्टर करें →",
    cta2: "WhatsApp पर जुड़ें",
  },
  proof: {
    stats: [
      {
        value: "100% KYC-सत्यापित",
        desc: "प्लेटफॉर्म पर पहली ट्रिप से पहले हर ड्राइवर की जाँच।",
      },
      {
        value: "हर ट्रिप पर लाइव GPS",
        desc: "फ्लीट मालिक इग्निशन से आखिरी डिलीवरी तक रियल टाइम ट्रैक करते हैं।",
      },
      {
        value: "एस्क्रो-समर्थित पेआउट",
        desc: "ड्राइवर को पेमेंट तभी जब आप डिलीवरी कन्फर्म करें।",
      },
    ],
  },
  why: {
    eyebrow: "मालिक की सुरक्षा",
    title: "सुरक्षित। सिर्फ बाटवा पर बुक करने पर।",
    cards: [
      {
        title: "एस्क्रो पेमेंट",
        desc: "डिलीवरी कन्फर्म होने तक पैसे सुरक्षित। काम पूरा होने से पहले कोई भुगतान नहीं।",
        badge: "सिर्फ बाटवा पर",
      },
      {
        title: "बीमा कवरेज",
        desc: "बाटवा की हर ट्रिप में दुर्घटना और कार्गो बीमा शामिल — कोई अतिरिक्त कागजी काम नहीं।",
        badge: "सिर्फ बाटवा पर",
      },
      {
        title: "विवाद समाधान",
        desc: "हर समस्या 48 घंटे में हल। आपके पास केस नंबर होगा, चैट बॉट नहीं।",
        badge: "सिर्फ बाटवा पर",
      },
      {
        title: "सत्यापित इतिहास",
        desc: "हर ड्राइवर का पूरा ट्रिप इतिहास, रेटिंग और रिकॉर्ड। कोई झटका नहीं, कोई अज्ञात नहीं।",
        badge: "सिर्फ बाटवा पर",
      },
    ],
  },
  cta: {
    headline: "आपके ट्रक बेकार नहीं बैठने चाहिए।",
    sub: "3 मिनट में ट्रिप पोस्ट करें। हर बार सत्यापित, GPS-ट्रैक ड्राइवर से मिलान।",
    btn1: "अपनी पहली ट्रिप पोस्ट करें →",
    btn2: "अपने पास गिग खोजें",
    appComingSoon: "जल्द आ रहा है",
    appStore: "ऐप स्टोर",
    playStore: "गूगल प्ले",
  },
  footer: {
    tagline: "आपके ट्रकों के लिए सत्यापित ड्राइवर। शुरू से अंत तक ट्रैक।",
    col1: "प्लेटफॉर्म",
    col2: "कंपनी",
    links1: [
      "कैसे काम करता है",
      "क्यों बाटवा",
      "ट्रिप पोस्ट करें",
      "हमारे साथ ड्राइव करें",
    ],
    links2: ["हमारे बारे में", "सुरक्षा", "करियर", "संपर्क"],
    copy: "© 2026 बाटवा। सभी अधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें",
  },
};

export const translations: Record<Lang, Translations> = { en, hi };
