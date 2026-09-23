export type ExploreCard = {
  name: string;
  description: string;
  icon: string;
  question: string;
};

export type ExploreCategory = {
  id: string;
  title: string;
  blurb: string;
  cards: ExploreCard[];
};

export const SUGGESTED_QUESTIONS: string[] = [
  "🇿🇦 What should I see in Cape Town?",
  "🦁 Where can I go on safari?",
  "🍽️ What South African food should I try?",
  "🚗 How can I travel around South Africa?",
  "☀️ When is the best time to visit?",
  "💰 What currency does South Africa use?",
  "🏙️ What should I do in Johannesburg?",
  "🏖️ What are some good beaches to visit?",
];

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  {
    id: "destinations",
    title: "Destinations",
    blurb: "Cities, parks and coastal routes worth building a trip around.",
    cards: [
      {
        name: "Cape Town",
        description: "Table Mountain, the V&A Waterfront, beaches and the winelands next door.",
        icon: "🏔️",
        question: "What are the best things to do in Cape Town?",
      },
      {
        name: "Johannesburg",
        description: "South Africa's biggest city: history museums, markets and nightlife.",
        icon: "🏙️",
        question: "What should I do in Johannesburg?",
      },
      {
        name: "Durban",
        description: "Warm Indian Ocean beaches, surf culture and superb Indian food.",
        icon: "🏖️",
        question: "What can I see and do in Durban?",
      },
      {
        name: "Pretoria",
        description: "The administrative capital, known for jacaranda trees and monuments.",
        icon: "🏛️",
        question: "What is there to see in Pretoria?",
      },
      {
        name: "Stellenbosch",
        description: "A university town in the Cape Winelands, surrounded by vineyards.",
        icon: "🍇",
        question: "What should I do in Stellenbosch and the Cape Winelands?",
      },
      {
        name: "Garden Route",
        description: "A scenic coastal drive with forests, lagoons and adventure stops.",
        icon: "🛣️",
        question: "How should I plan a Garden Route road trip?",
      },
      {
        name: "Kruger National Park",
        description: "One of Africa's great game reserves and the classic Big Five safari.",
        icon: "🦁",
        question: "How do I plan a trip to Kruger National Park?",
      },
      {
        name: "Drakensberg",
        description: "Dramatic mountain range with hiking trails and rock art.",
        icon: "⛰️",
        question: "What can I do in the Drakensberg mountains?",
      },
      {
        name: "Gqeberha",
        description: "Friendly coastal city near malaria-free safari reserves.",
        icon: "🌊",
        question: "What is there to do in Gqeberha (Port Elizabeth)?",
      },
      {
        name: "Hermanus",
        description: "Whale-watching town on the Whale Coast, east of Cape Town.",
        icon: "🐋",
        question: "When and where can I go whale watching in Hermanus?",
      },
    ],
  },
  {
    id: "activities",
    title: "Activities",
    blurb: "Ways to spend your days, from game drives to wine farms.",
    cards: [
      {
        name: "Safari",
        description: "Game drives in Kruger and private reserves, guided by rangers.",
        icon: "🐘",
        question: "What should I know before going on a safari in South Africa?",
      },
      {
        name: "Hiking",
        description: "Table Mountain, the Drakensberg and coastal trails for all levels.",
        icon: "🥾",
        question: "What are the best hikes in South Africa?",
      },
      {
        name: "Beaches",
        description: "Warm Durban surf, Cape peninsula coves and Garden Route bays.",
        icon: "🏝️",
        question: "What are the best beaches to visit in South Africa?",
      },
      {
        name: "Wine tasting",
        description: "Stellenbosch, Franschhoek and Paarl estates within easy reach of Cape Town.",
        icon: "🍷",
        question: "How can I do a wine tasting day trip from Cape Town?",
      },
      {
        name: "Whale watching",
        description: "Southern right whales along the Whale Coast in winter and spring.",
        icon: "🐳",
        question: "Where and when is the best whale watching in South Africa?",
      },
      {
        name: "Cultural experiences",
        description: "Township tours, museums, music, craft markets and local guides.",
        icon: "🪘",
        question: "What cultural experiences should I try in South Africa?",
      },
      {
        name: "Scenic drives",
        description: "Chapman's Peak, the Panorama Route and the coastal N2.",
        icon: "🚙",
        question: "Which scenic drives should I not miss in South Africa?",
      },
      {
        name: "Adventure",
        description: "Shark cage diving, bungee jumping, sandboarding and paragliding.",
        icon: "🪂",
        question: "What adventure activities can I do in South Africa?",
      },
      {
        name: "Food experiences",
        description: "Braais, food markets, Cape Malay cooking classes and wine pairings.",
        icon: "🔥",
        question: "What food experiences should I book in South Africa?",
      },
    ],
  },
  {
    id: "food",
    title: "Food",
    blurb: "Dishes to order at least once while you are here.",
    cards: [
      {
        name: "Bobotie",
        description: "Spiced minced meat baked with a savoury custard topping.",
        icon: "🍲",
        question: "What is bobotie and where can I try it?",
      },
      {
        name: "Braai",
        description: "More a social ritual than a barbecue: fire, meat and friends.",
        icon: "🔥",
        question: "What is a braai and what is usually served at one?",
      },
      {
        name: "Bunny chow",
        description: "Durban street food: a hollowed bread loaf filled with curry.",
        icon: "🍛",
        question: "What is bunny chow and where should I eat it?",
      },
      {
        name: "Boerewors",
        description: "Coiled farm-style sausage, a braai essential.",
        icon: "🌭",
        question: "What is boerewors and how is it eaten?",
      },
      {
        name: "Malva pudding",
        description: "Warm sticky apricot sponge served with cream or custard.",
        icon: "🍮",
        question: "Tell me about South African desserts like malva pudding.",
      },
      {
        name: "Koeksisters",
        description: "Plaited dough, deep fried and soaked in sweet syrup.",
        icon: "🥨",
        question: "What are koeksisters and where can I find them?",
      },
      {
        name: "Vetkoek",
        description: "Fried dough buns filled with mince, cheese or jam.",
        icon: "🥯",
        question: "What is vetkoek and what is it filled with?",
      },
      {
        name: "Cape Malay cuisine",
        description: "Fragrant curries, bredies and sambals from Cape Town's Bo-Kaap.",
        icon: "🥘",
        question: "What should I know about Cape Malay food in Cape Town?",
      },
    ],
  },
  {
    id: "travel-info",
    title: "Travel information",
    blurb: "The practical details tourists usually ask about first.",
    cards: [
      {
        name: "Currency",
        description: "The South African Rand (ZAR). Cards widely accepted, some cash is handy.",
        icon: "💰",
        question: "What currency does South Africa use and how should I pay for things?",
      },
      {
        name: "Transport",
        description: "Domestic flights, rental cars, Gautrain, MyCiTi buses and ride hailing.",
        icon: "🚌",
        question: "How can I travel between and around South African cities?",
      },
      {
        name: "Climate & seasons",
        description: "Southern hemisphere seasons, so December is summer and July is winter.",
        icon: "☀️",
        question: "What is the weather like and when is the best time to visit?",
      },
      {
        name: "Culture & etiquette",
        description: "Twelve official languages, warm greetings and everyday courtesies.",
        icon: "🤝",
        question: "What cultural etiquette should tourists know in South Africa?",
      },
      {
        name: "Safety",
        description: "Sensible city precautions, night travel tips and emergency numbers.",
        icon: "🛡️",
        question: "What should tourists know about safety in South Africa?",
      },
      {
        name: "Plugs & practicalities",
        description: "230V power, type M plugs, SAST time zone (UTC+2), local SIM options.",
        icon: "🔌",
        question: "What plugs, power and practical basics should I prepare for?",
      },
    ],
  },
];

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { title: string; icon: string; items: FaqItem[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "General",
    icon: "🧭",
    items: [
      {
        question: "What currency does South Africa use?",
        answer:
          "The South African Rand (ZAR, shown as R). Cards are widely accepted in cities, and it helps to carry some cash for markets, tips and small towns. Check a live converter for today's exchange rate.",
      },
      {
        question: "What languages are spoken?",
        answer:
          "South Africa has 12 official languages, including English, isiZulu, isiXhosa, Afrikaans and Sesotho. English is widely spoken in tourism, transport and hospitality.",
      },
      {
        question: "What time zone is South Africa in?",
        answer:
          "South African Standard Time (SAST), UTC+2, with no daylight saving changes during the year.",
      },
    ],
  },
  {
    title: "Destinations",
    icon: "📍",
    items: [
      {
        question: "What can I do in Cape Town?",
        answer:
          "Table Mountain, the V&A Waterfront, Boulders Beach penguins, the Cape Peninsula drive, Bo-Kaap, Robben Island and day trips to the winelands are the classics.",
      },
      {
        question: "Where can I go on safari?",
        answer:
          "Kruger National Park and its private reserves are the best known. Addo Elephant Park near Gqeberha and Madikwe are good malaria-free alternatives.",
      },
      {
        question: "What should I see in Johannesburg?",
        answer:
          "The Apartheid Museum, Constitution Hill, a guided Soweto tour, Maboneng and Neighbourgoods markets, plus Gold Reef City for families.",
      },
    ],
  },
  {
    title: "Food & culture",
    icon: "🍽️",
    items: [
      {
        question: "What South African food should I try?",
        answer:
          "Bobotie, boerewors off a braai, bunny chow in Durban, Cape Malay curry in Cape Town, biltong for the road and malva pudding for dessert.",
      },
      {
        question: "What is a braai?",
        answer:
          "A braai is a South African barbecue and a social occasion in its own right: wood or charcoal fire, meat such as boerewors and chops, side dishes, and hours of good company.",
      },
      {
        question: "What is bunny chow?",
        answer:
          "A Durban street-food classic: a quarter or half loaf of bread hollowed out and filled with curry, eaten with your hands.",
      },
    ],
  },
  {
    title: "Transport",
    icon: "🚗",
    items: [
      {
        question: "How can I travel between cities?",
        answer:
          "Domestic flights are quickest between Cape Town, Johannesburg and Durban. Rental cars suit the Garden Route and Kruger, and intercity coaches are a budget option. Remember: driving is on the left.",
      },
      {
        question: "How can I get around Cape Town?",
        answer:
          "MyCiTi buses cover many tourist areas, ride-hailing apps are widely used, and a rental car is useful for the peninsula and winelands.",
      },
    ],
  },
  {
    title: "Safety",
    icon: "🛡️",
    items: [
      {
        question: "What should tourists know about safety?",
        answer:
          "Use the same care you would in any big city: avoid walking alone at night, keep phones and valuables out of sight, use ride-hailing after dark, lock car doors and keep bags out of view, and hike in groups. Always check current local advice before you travel.",
      },
      {
        question: "What should I do in an emergency?",
        answer:
          "Police 10111, ambulance 10177, or 112 from a mobile phone. Save your accommodation's number and your country's embassy contact details before you arrive.",
      },
    ],
  },
];
