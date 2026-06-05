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

export interface BenefitCard {
  label: string;
  desc: string;
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
    escrowLead: string;
    benefitCards: BenefitCard[];
    ctaNote: string;
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
  driverTrust: {
    eyebrow: string;
    items: { title: string; desc: string }[];
  };
  driverTestimonial: {
    quote: string;
    name: string;
    route: string;
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
    postTrip: "Post a load",
  },
  hero: {
    eyebrow: "India's freight marketplace — loaded both ways",
    headline: "Trucks full. Drivers paid. Contractors save.",
    sub: "Baatwa fills the empty return leg and removes the broker cut. The recovered surplus funds a guaranteed driver wage and a lower price for contractors — without squeezing anyone.",
    cta1: "Post a load →",
    cta2: "Drive with Baatwa",
    pills: ["Backhaul Matching", "Escrow Payout", "KYC Verified"],
  },
  trust: {
    eyebrow: "Built for every side",
    title: "Same trip. Three parties win.",
    cards: [
      {
        label: "KYC-verified drivers",
        desc: "Aadhaar, licence, RC, and PUC checked before any driver moves a truck on Baatwa.",
      },
      {
        label: "Backhaul engine",
        desc: "Return loads surfaced at booking. Owners quote lower by earning on both legs.",
      },
      {
        label: "Transparent rates",
        desc: "Published lane-based rates with a visible driver floor. No hidden markup anywhere.",
      },
      {
        label: "Direct escrow pay",
        desc: "Driver floor paid straight to driver wallet on verified ePOD. Owner margin separate.",
      },
      {
        label: "Genuine transporter",
        desc: "KYC status and trip history visible to contractors before they confirm a booking.",
      },
    ],
  },
  how: {
    eyebrow: "The marketplace flow",
    title: "Tender to delivery — all parties in.",
    steps: [
      {
        title: "Contractor posts a load",
        desc: "Route, date, vehicle type, weight. Transparent lane rate shown upfront — driver floor visible too.",
      },
      {
        title: "Owner bids with a return",
        desc: "Return loads surface at booking. Owner quotes lower by recovering the backhaul — both sides see where the saving comes from.",
      },
      {
        title: "Driver accepts, owner confirms",
        desc: "Driver reviews and accepts the gig. Owner checks KYC profile and confirms. Contractor's funds enter escrow.",
      },
      {
        title: "ePOD unlocks escrow",
        desc: "Delivery verified. Driver floor → wallet. Owner margin → owner. Fixed take-rate → Baatwa. Full breakdown, always.",
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
    escrowLead:
      "Your payment is locked in escrow before the trip starts. Finish the trip, get paid instantly.",
    benefitCards: [
      {
        label: "Guaranteed fair rate",
        desc: "The driver floor is set per lane and enforced by escrow — you know what you'll earn before the engine starts.",
      },
      {
        label: "Gigs near you",
        desc: "Browse trips by location. Work on your own terms.",
      },
      {
        label: "Advance for the road",
        desc: "Fuel and food advance credited before you start.",
      },
      {
        label: "We've got your back",
        desc: "Accident insurance on every trip, and we stand with you in any dispute.",
      },
    ],
    ctaNote: "Launching soon",
    cta1: "Download the app",
    cta2: "Chat on WhatsApp",
  },
  proof: {
    stats: [
      {
        value: "100% KYC verified",
        desc: "Every driver checked before their first trip — Aadhaar, licence, RC, and PUC.",
      },
      {
        value: "Backhaul matched",
        desc: "Return loads surfaced at booking — owners earn on both legs and quote lower to contractors.",
      },
      {
        value: "Driver floor enforced",
        desc: "Fair-rate floor paid directly from escrow on every trip. No quiet deductions.",
      },
    ],
  },
  why: {
    eyebrow: "The three-way win",
    title: "Efficiency funds everyone's share.",
    cards: [
      {
        title: "Contractors pay less",
        desc: "Backhaul recovery and removed broker margin lower the effective trip cost. The full price breakdown is always visible.",
        badge: "Lower cost",
      },
      {
        title: "Owners earn more per km",
        desc: "A truck earning on both legs has a far lower effective cost per loaded km. Baatwa surfaces the return load before the first trip starts.",
        badge: "Better utilisation",
      },
      {
        title: "Drivers get guaranteed pay",
        desc: "The fair-rate floor is enforced by escrow — Baatwa pays drivers direct, so the owner can't quietly cut the wage.",
        badge: "Enforced by escrow",
      },
      {
        title: "Transparent everywhere",
        desc: "Every party sees the full payment breakdown — rate, floor, margin, take-rate. No hidden markup anywhere.",
        badge: "Open book",
      },
    ],
  },
  driverTrust: {
    eyebrow: "Why drivers trust Baatwa",
    items: [
      {
        title: "Paid before you doubt it",
        desc: "Payment locked in escrow the moment your trip confirms. No chasing, no excuses.",
      },
      {
        title: "Directly to your wallet",
        desc: "Baatwa pays you direct from escrow — not through the owner. The floor can't be quietly cut.",
      },
      {
        title: "Proof on your side",
        desc: "Timestamped handover photos stored on every trip. False blame doesn't stand a chance.",
      },
    ],
  },
  driverTestimonial: {
    quote:
      "Baatwa ne sach me time pe paisa diya. Pehli baar kisi ne bina chase kiye bheja.",
    name: "Ramesh",
    route: "Ranchi – Kolkata",
  },
  cta: {
    headline: "Every trip should earn both ways.",
    sub: "Post a load or find a gig. Baatwa matches the return, enforces fair pay, and settles escrow on ePOD.",
    btn1: "Post a load →",
    btn2: "Find gigs near you",
    appComingSoon: "Coming soon",
    appStore: "App Store",
    playStore: "Google Play",
  },
  footer: {
    tagline: "Freight marketplace for all sides of the road.",
    col1: "Platform",
    col2: "Company",
    links1: ["How it works", "Why Baatwa", "Post a load", "Drive with us"],
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
    postTrip: "लोड पोस्ट करें",
  },
  hero: {
    eyebrow: "भारत का फ्रेट मार्केटप्लेस — दोनों दिशाओं से भरा",
    headline: "ट्रक भरे। ड्राइवर को पैसा। कॉन्ट्रेक्टर बचाए।",
    sub: "बाटवा खाली वापसी को भरता है और बिचौलिए की कमाई हटाता है। बची रकम से ड्राइवर को गारंटीड मेहनताना और कॉन्ट्रेक्टर को सस्ती ट्रिप मिलती है।",
    cta1: "लोड पोस्ट करें →",
    cta2: "बाटवा के साथ ड्राइव करें",
    pills: ["बैकहॉल मिलान", "एस्क्रो पेआउट", "KYC सत्यापित"],
  },
  trust: {
    eyebrow: "हर पक्ष के लिए बना",
    title: "एक ट्रिप। तीनों को फायदा।",
    cards: [
      {
        label: "KYC-सत्यापित ड्राइवर",
        desc: "आधार, लाइसेंस, RC और PUC की जाँच हर ड्राइवर की पहली ट्रिप से पहले।",
      },
      {
        label: "बैकहॉल इंजन",
        desc: "बुकिंग पर वापसी लोड दिखाए। मालिक दोनों तरफ कमाकर कम कोट करे।",
      },
      {
        label: "पारदर्शी दरें",
        desc: "लेन-आधारित दरें प्रकाशित, ड्राइवर फ्लोर दिखाई। कहीं कोई छुपा मार्कअप नहीं।",
      },
      {
        label: "सीधा एस्क्रो पेमेंट",
        desc: "ePOD पर ड्राइवर का हिस्सा सीधे उसके वॉलेट में। मालिक का मार्जिन अलग।",
      },
      {
        label: "असली ट्रांसपोर्टर",
        desc: "कॉन्ट्रेक्टर बुकिंग से पहले ड्राइवर की KYC स्थिति और ट्रिप इतिहास देखे।",
      },
    ],
  },
  how: {
    eyebrow: "मार्केटप्लेस का प्रवाह",
    title: "टेंडर से डिलीवरी — सब एक साथ।",
    steps: [
      {
        title: "कॉन्ट्रेक्टर लोड पोस्ट करे",
        desc: "रूट, तारीख, ट्रक का प्रकार, वजन। पारदर्शी लेन दर शुरू से — ड्राइवर फ्लोर भी दिखाई।",
      },
      {
        title: "मालिक वापसी के साथ बोली लगाए",
        desc: "बुकिंग पर वापसी लोड दिखते हैं। मालिक बैकहॉल रिकवर कर कम कोट करे — बचत कहाँ से आई, दोनों देख सकते हैं।",
      },
      {
        title: "ड्राइवर स्वीकारे, मालिक पुष्टि करे",
        desc: "ड्राइवर गिग देखकर स्वीकार करे। मालिक KYC प्रोफाइल जाँचकर पुष्टि करे। कॉन्ट्रेक्टर का पैसा एस्क्रो में।",
      },
      {
        title: "ePOD से एस्क्रो खुले",
        desc: "डिलीवरी सत्यापित। ड्राइवर का हिस्सा → वॉलेट। मालिक का मार्जिन → मालिक। बाटवा का तय शुल्क → बाटवा। पूरा हिसाब हमेशा दिखे।",
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
    escrowLead:
      "ट्रिप शुरू होने से पहले ही पेमेंट एस्क्रो में लॉक हो जाता है। ट्रिप खत्म करो, तुरंत पैसा पाओ।",
    benefitCards: [
      {
        label: "गारंटीड सही दर",
        desc: "ड्राइवर फ्लोर हर लेन पर तय, एस्क्रो से लागू — इंजन शुरू होने से पहले कमाई मालूम।",
      },
      {
        label: "पास के गिग",
        desc: "जगह के हिसाब से ट्रिप देखो। अपनी शर्तों पर काम करो।",
      },
      {
        label: "रास्ते का एडवांस",
        desc: "निकलने से पहले ईंधन और खाने का एडवांस मिलता है।",
      },
      {
        label: "हम साथ हैं",
        desc: "हर ट्रिप पर दुर्घटना बीमा और विवाद में पूरी मदद।",
      },
    ],
    ctaNote: "जल्द लॉन्च हो रहा है",
    cta1: "ऐप डाउनलोड करें",
    cta2: "WhatsApp पर चैट करें",
  },
  proof: {
    stats: [
      {
        value: "100% KYC सत्यापित",
        desc: "पहली ट्रिप से पहले हर ड्राइवर की जाँच — आधार, लाइसेंस, RC, PUC।",
      },
      {
        value: "बैकहॉल मिलान",
        desc: "बुकिंग पर वापसी लोड — मालिक दोनों तरफ कमाए, कॉन्ट्रेक्टर को सस्ता।",
      },
      {
        value: "ड्राइवर फ्लोर लागू",
        desc: "हर ट्रिप पर एस्क्रो से सीधे सही दर। कोई चुपके से कटौती नहीं।",
      },
    ],
  },
  why: {
    eyebrow: "तीन तरफा फायदा",
    title: "कुशलता सबका हिस्सा बनाती है।",
    cards: [
      {
        title: "कॉन्ट्रेक्टर कम देते हैं",
        desc: "बैकहॉल रिकवरी और बिचौलिए की कमाई हटाने से ट्रिप सस्ती होती है। पूरा हिसाब हमेशा दिखे।",
        badge: "कम लागत",
      },
      {
        title: "मालिक प्रति km ज़्यादा कमाते हैं",
        desc: "दोनों दिशाओं में कमाने वाले ट्रक की प्रभावी लागत कम होती है। बाटवा पहली ट्रिप से पहले वापसी लोड दिखाता है।",
        badge: "बेहतर उपयोग",
      },
      {
        title: "ड्राइवर को गारंटीड पेमेंट",
        desc: "फेयर-रेट फ्लोर एस्क्रो से लागू — बाटवा सीधे ड्राइवर को पेमेंट करता है, मालिक चुपके से नहीं काट सकता।",
        badge: "एस्क्रो से लागू",
      },
      {
        title: "हर जगह पारदर्शिता",
        desc: "हर पक्ष पूरा पेमेंट देखे — दर, फ्लोर, मार्जिन, शुल्क। कहीं कोई छुपा मार्कअप नहीं।",
        badge: "खुली किताब",
      },
    ],
  },
  driverTrust: {
    eyebrow: "ड्राइवर क्यों भरोसा करते हैं बाटवा पर",
    items: [
      {
        title: "शक से पहले पेमेंट",
        desc: "ट्रिप कन्फर्म होते ही पेमेंट एस्क्रो में लॉक। कोई पीछा नहीं, कोई बहाना नहीं।",
      },
      {
        title: "सीधे तुम्हारे वॉलेट में",
        desc: "बाटवा सीधे एस्क्रो से पेमेंट करता है — मालिक के हाथ नहीं जाता। फ्लोर चुपके से नहीं काटा जा सकता।",
      },
      {
        title: "सबूत तुम्हारी तरफ",
        desc: "हर ट्रिप पर हैंडओवर फोटो टाइमस्टैम्प के साथ। झूठा इल्जाम नहीं टिकता।",
      },
    ],
  },
  driverTestimonial: {
    quote:
      "बाटवा ने सच में टाइम पर पैसा दिया। पहली बार किसी ने बिना पीछा किए भेजा।",
    name: "रमेश",
    route: "रांची – कोलकाता",
  },
  cta: {
    headline: "हर ट्रिप दोनों तरफ से कमानी चाहिए।",
    sub: "लोड पोस्ट करें या गिग खोजें। बाटवा वापसी मिलाता है, सही पेमेंट सुनिश्चित करता है, ePOD पर एस्क्रो सेटल।",
    btn1: "लोड पोस्ट करें →",
    btn2: "अपने पास गिग खोजें",
    appComingSoon: "जल्द आ रहा है",
    appStore: "ऐप स्टोर",
    playStore: "गूगल प्ले",
  },
  footer: {
    tagline: "सड़क के हर पक्ष के लिए फ्रेट मार्केटप्लेस।",
    col1: "प्लेटफॉर्म",
    col2: "कंपनी",
    links1: [
      "कैसे काम करता है",
      "क्यों बाटवा",
      "लोड पोस्ट करें",
      "हमारे साथ ड्राइव करें",
    ],
    links2: ["हमारे बारे में", "सुरक्षा", "करियर", "संपर्क"],
    copy: "© 2026 बाटवा। सभी अधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "सेवा की शर्तें",
  },
};

export const translations: Record<Lang, Translations> = { en, hi };
